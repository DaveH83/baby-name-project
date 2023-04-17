from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import App_User 
from django.core.serializers import serialize
import json

# Create your views here.

def send_index(request):
    indexPage = open('static/index.html')
    return HttpResponse(indexPage)


@api_view(["GET"])
def curr_user(request):
    
    if request.user.is_authenticated:
        print(request.user)
        user_info = serialize("json",  [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
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
    print(user)

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