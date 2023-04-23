from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .models import Baby_Names, Session_Names
from django.core.serializers import serialize
import json
import requests
import os
from dotenv import load_dotenv

# Create your views here.


# def homePage(request):
#     indexPage = open('static/index.html')
#     return HttpResponse(indexPage)

@api_view(["GET"])
def get_names(request):
    
    gender = request.gender
    sort = request.sort
    print(gender, sort)


    return JsonResponse({'test': 'success'})