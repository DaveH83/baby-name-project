from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_index, name='home'),
    path('curruser/', views.curr_user, name='curruser'),
    path('register/', views.register_user, name="register"),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('dadjoke/', views.dad_joke, name='dad_joke'),
    path('createsession/', views.create_session, name='create_session'),
    path('inviteaccept/', views.invite_accept, name='invite_accept'),
]
