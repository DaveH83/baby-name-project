from django.db import models
from user_app.models import App_User

# Create your models here.

class Baby_Names(models.Model):
    name = models.CharField(max_length=255, null = False, blank = False, unique = True)
    popularity = models.IntegerField(null = True, blank = True)
    gender = models.CharField(max_length=1, null = False, blank = False)

    def __str__(self):
        return f"Name: {self.name} | Popularity: {self.popularity}"



class Session_Names(models.Model):
    baby_name_id = models.ForeignKey(Baby_Names, related_name=("baby_name"), on_delete=models.CASCADE)
    session_id = models.IntegerField(null = True, blank = True)
    session_gender = models.CharField(max_length=1, null = True, blank = True)
    parent1_id = models.ForeignKey(App_User, related_name="parent1", on_delete=models.CASCADE)
    parent2_id = models.ForeignKey(App_User, related_name="parent2", on_delete=models.CASCADE)
    parent_1_choice = models.CharField(max_length=10, null = True, blank = True)
    parent_2_choice = models.CharField(max_length=10, null = True, blank = True)
    agreed = models.CharField(max_length=1, null = True, blank = True)
    manual_add = models.CharField(max_length=1, null = True, blank = True)
    weight = models.IntegerField(null = True, blank = True)

    # def __str__(self):
    #     return f"Parents: {self.parent1_id}, {self.parent2_id}\nSession ID: {self.session_id}\nBaby Name: {self.baby_name_id}\nAgreed: {self.agreed}"