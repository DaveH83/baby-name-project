from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

# Create your views here.

def loginPage(request):
    indexPage = open('static/index.html')
    return HttpResponse(indexPage)