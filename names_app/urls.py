from django.urls import path
from . import views

urlpatterns = [
    path('getnames/', views.get_names, name='get_names'),
    path('getsession/', views.get_session, name='get_session'),
    path('updatesession/', views.update_session, name='update_session')
]
