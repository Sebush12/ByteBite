from django.db import models
from django.contrib.auth.hashers import make_password, check_password


# Create your models here.
class Users(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    name = models.CharField(max_length=40, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)  # This should be a hashed value!

    def save(self, *args, **kwargs):
        self.name = f"{self.first_name} {self.last_name}"
        super(Users, self).save(*args, **kwargs)

    def set_password(self, raw_password):
        # Use Django's hashing mechanism here
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.name
