from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .models import Baby_Names, Session_Names, App_User
from django.core.serializers import serialize
import json
# import os
# from dotenv import load_dotenv

# Create your views here.

@api_view(["POST"])
def get_session(request):

    try:
        user = request.data['user']
        session_data = []
        session = list(Session_Names.objects.filter(session_id=user['session_id']).prefetch_related('baby_name_id'))

        for item in session:
            
            session_info = serialize("json",  [item], fields = ['pk', 'baby_name_id', 'session_id', 'session_gender', 'parent1_id', 'parent2_id', 'parent_1_choice', 'parent_2_choice', 'agreed', 'manual_add', 'weight'])        
            session_info_workable = json.loads(session_info)
            session_info_workable[0]['fields']['pk'] = session_info_workable[0]['pk']
            session_info_workable[0]['fields']['baby_name_id'] = {
                'name': item.baby_name_id.name,
                'popularity': item.baby_name_id.popularity,
                'gender': item.baby_name_id.gender,
            }
            
            session_data.append(session_info_workable[0]['fields'])

        # print('return: ',session_data)
        # print('\n')

        return JsonResponse({'session':session_data}) 

    except Exception as e:
        print('error: ', e)
        return JsonResponse({'session':'cannot load session'})


@api_view(["POST"])
def get_names(request):
    
    try:
        gender = request.data['gender']
        sort = request.data['sort']
        user = request.data['user']
        
        names = Baby_Names.objects.filter(gender=gender).order_by(f"-{sort}")
        session = Session_Names.objects.filter(session_id = user['session_id'])

        session_excludes = []
        for item in session:
            if user['parent_num'] == 1 and item.parent_1_choice:
                session_excludes.append(item.baby_name_id)
            elif user['parent_num'] == 2 and item.parent_2_choice:
                session_excludes.append(item.baby_name_id)
        
        
        names_list = []
        for name in names:
            if name not in session_excludes:
                names_list.append({
                    'name':name.name,
                    'popularity': name.popularity,
                    'gender': name.gender
                })

        return JsonResponse({'names':names_list})
    
    except Exception as e:
        print('error: ', e)
        return JsonResponse({'names':'cannot load names'})
    

@api_view(["POST"])
def update_session(request):

    
    update = request.data['update'][0]
    updated = False

    try:

        if update['parent'] == 1:

            session = Session_Names.objects.filter(session_id=update['session'], parent_1_choice = None).prefetch_related('baby_name_id')

            for entry in session:
                if entry.baby_name_id.name == update['name']:
                    entry.parent_1_choice = update['choice']
                    if entry.parent_2_choice == 'y' and update['choice'] == 'y':
                        entry.agreed = 'y'
                    entry.save()
                    updated = True
        
            if updated == False:
                new_baby_name_id = Baby_Names.objects.get(name=update['name'])
                parent1 = App_User.objects.get(username = update['user']['username'])
                other_parent_id = App_User.objects.get(username = update['user']['other_parent'])
                Session_Names.objects.create(baby_name_id = new_baby_name_id, session_id = update['session'], session_gender = update['user']['baby_gender'], parent1_id = parent1, parent2_id = other_parent_id, parent_1_choice = update['choice'])


        if update['parent'] == 2:

            session = Session_Names.objects.filter(session_id=update['session'], parent_2_choice = None).prefetch_related('baby_name_id')

            for entry in session:
                if entry.baby_name_id.name == update['name']:
                    entry.parent_2_choice = update['choice']
                    if entry.parent_1_choice == 'y' and update['choice'] == 'y':
                        entry.agreed = 'y'
                    entry.save()
                    updated = True
        
            if updated == False:
                new_baby_name_id = Baby_Names.objects.get(name=update['name'])
                parent2 = App_User.objects.get(username = update['user']['username'])
                other_parent_id = App_User.objects.get(username = update['user']['other_parent'])
                Session_Names.objects.create(baby_name_id = new_baby_name_id, session_id = update['session'], session_gender = update['user']['baby_gender'], parent2_id = parent2, parent1_id = other_parent_id, parent_2_choice = update['choice'])

    
        # print(session)
        return JsonResponse({'update':'success'})

    except Exception as e:
        print(e)
        return JsonResponse({'update':'failure'})
