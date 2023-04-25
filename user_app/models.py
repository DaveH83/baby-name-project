from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class App_User(AbstractUser):
    email = models.EmailField(blank = False, null = False, unique = True)
    name = models.CharField(max_length = 255, null = False, blank = False)
    session_id = models.IntegerField(null = True, blank = True)
    parent_num = models.IntegerField(null = True, blank = True)
    other_parent = models.CharField(null = True, blank = True)
    session_invite = models.CharField(max_length= 255, null = True, blank = True)
    baby_gender = models.CharField(max_length=1, null=True, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        
        #basic __str__ return statement
        return f"{self.name} | {self.username}"


        # Detailed __str__ return statement
        # return f"**************\nuser id: {self.pk}\nuser e-mail address: {self.email}\nuser name: {self.name}\nsession_id: {self.session_id}\nother parent: {self.other_parent}\nsession invite: {self.session_invite}\nbaby gender: {self.baby_gender}\n**************"