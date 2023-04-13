from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def homePage(request):
    indexPage = open('static/index.html')
    return HttpResponse(indexPage)