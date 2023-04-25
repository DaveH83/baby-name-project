from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import App_User 
from django.core.serializers import serialize
import json
import requests
import os
from dotenv import load_dotenv

load_dotenv()

# Create your views here.

def send_index(request):
    indexPage = open('static/index.html')
    return HttpResponse(indexPage)


@api_view(["GET"])
def curr_user(request):
    
    if request.user.is_authenticated:
        user_info = serialize("json",  [request.user], fields = ['pk', 'name', 'email', 'username', 'session_id', 'other_parent', 'parent_num', 'session_invite', 'baby_gender'])        
        user_info_workable = json.loads(user_info)
        user_info_workable[0]['fields']['pk'] = user_info_workable[0]['pk']
        
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})
    

@api_view(["POST"])
def register_user(request):
    email = request.data['email']
    password = request.data['password']
    name = request.data['name']
    super_user = False
    staff = False

    try:
        new_user = App_User.objects.create_user(username = email, email = email, name = name, password = password, is_superuser = super_user, is_staff = staff)
        new_user.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success":False})
    

@api_view(["POST"])
def login_user(request):
    email = request.data['email']
    password = request.data['password']

    user = authenticate(username = email, password = password)
    # print(user)

    if user is not None and user.is_active:
        try:
            login(request._request, user)
            return JsonResponse({"logged_in":True})
        except Exception as e:
            print(e)
            return JsonResponse({"logged_in":False})

    
@api_view(["POST"])
def logout_user(request):
    try:
        logout(request)
        return JsonResponse({"logged_out": True})
    
    except Exception as e:
        print(e)
        return JsonResponse({"logged_out": False})
    

@api_view(["POST"])
def create_session(request):
    try:
        username = request.data['username']
        gender = request.data['gender']
        otherParent = request.data['otherParent']
        
        user = App_User.objects.get(username = username)
        user2 = App_User.objects.get(username = otherParent)
                
        user.session_id = int(f"{user.id}{user2.id}")
        user.baby_gender = gender
        user.save()

        user2.session_invite = user.username
        user2.save()
                
        return JsonResponse({'success': True})

    except Exception as e:
        print(e)
        return JsonResponse({'success': False})
    


@api_view(["POST"])
def invite_accept(request):

    try:
        action = request.data['action']
        invitee = App_User.objects.get(username = request.data['invitee'])
        inviter = App_User.objects.get(username = request.data['inviter'])

        # print('action: ', action)
        # print('invitee before: \n', invitee)
        # print('inviter before: \n', inviter)
        
        if action == 'accept':
            invitee.session_id = inviter.session_id
            invitee.other_parent = inviter.username
            invitee.session_invite = None
            invitee.parent_num = 2
            invitee.baby_gender = inviter.baby_gender
            invitee.save()

            inviter.other_parent = invitee.username
            inviter.parent_num = 1
            inviter.save()

            
            # print('invitee: after\n', invitee)
            # print('inviter: after\n', inviter)

            return JsonResponse({'action': 'accepted'})
            
        elif action == 'reject':
            invitee.session_invite = None
            invitee.save()

            inviter.session_id = None
            inviter.baby_gender = None
            inviter.save()

            # print(action)
            # print('invitee: after\n', invitee)
            # print('inviter: after\n', inviter)

            return JsonResponse({'action': 'rejected'})

    except Exception as e:
        print('error: ',e)
        return JsonResponse({'success': False})

@api_view(["GET"])
def dad_joke(request):
    
    api_url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
    response = requests.get(api_url, headers={'X-Api-Key': os.environ['dad_joke_api_key']})
    
    if response.status_code == requests.codes.ok:
        joke = response.text.split(':', 1)
        joke = joke[1].split('}')
                
        return JsonResponse({'joke': joke[0]})
    else:
        print("Error:", response.status_code, response.text)
        return JsonResponse({"dad_joke":["Error", response.status_code]})