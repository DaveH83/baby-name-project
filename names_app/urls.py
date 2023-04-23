from django.urls import path
from . import views

urlpatterns = [
    # path('', views.homePage, name='home'),
    path('getnames/', views.get_names, name='get_names'),
]
