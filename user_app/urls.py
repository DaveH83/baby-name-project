from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_index, name='index'),
    path('curruser/', views.curr_user, name='curruser'),
    path('register/', views.register_user, name="register"),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('dadjoke', views.dad_joke, name='dad_joke')
]
