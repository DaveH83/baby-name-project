from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .models import Baby_Names, Session_Names
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

        print('return: ',session_data)
        print('\n')

        return JsonResponse({'session':session_data}) 

    except Exception as e:
        print('error: ', e)
        return JsonResponse({'session':'cannot load session'})


@api_view(["POST"])
def get_names(request):
    
    try:
        gender = request.data['gender']
        sort = request.data['sort']
        
        names = Baby_Names.objects.filter(gender=gender).order_by(f"-{sort}")

        
        names_list = []
        for name in names:
            names_list.append({
                'name':name.name,
                'popularity': name.popularity,
                'gender': name.gender
            })

        return JsonResponse({'names':names_list})
    
    except Exception as e:
        print('error: ', e)
        return JsonResponse({'names':'cannot load names'})