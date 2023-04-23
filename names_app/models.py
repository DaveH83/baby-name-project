from django.db import models
from user_app.models import App_User

# Create your models here.

class Baby_Names(models.Model):
    name = models.CharField(max_length=255, null = False, blank = False, unique = True)
    popularity = models.IntegerField(null = False, blank = False)
    gender = models.CharField(max_length=1, null = False, blank = False)



class Session_Names(models.Model):
    baby_name_id = models.ForeignKey(Baby_Names, verbose_name=("baby_name"), on_delete=models.CASCADE)
    session_id = models.IntegerField(null = True, blank = True)
    session_gender = models.CharField(max_length=1, null = True, blank = True)
    parent1_id = models.ForeignKey(App_User, related_name="parent1", on_delete=models.CASCADE)
    parent2_id = models.ForeignKey(App_User, related_name="parent2", on_delete=models.CASCADE)
    parent_1_choice = models.CharField(max_length=10, null = True, blank = True)
    parent_2_choice = models.CharField(max_length=10, null = True, blank = True)
    agreed = models.CharField(max_length=1, null = True, blank = True)
    manual_add = models.CharField(max_length=1, null = True, blank = True)
    weight = models.IntegerField(null = True, blank = True)