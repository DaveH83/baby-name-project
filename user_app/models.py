from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class App_User(AbstractUser):
    email = models.EmailField(blank = False, null = False, unique = True)
    name = models.CharField(max_length = 255, null = False, blank = False)
    session_id = models.IntegerField(null = True, blank = True)
    parent_num = models.IntegerField(null = True, blank = True)
    other_parent = models.IntegerField(null = True, blank = True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.email} | {self.name}"