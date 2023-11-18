from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.shortcuts import render
from django.db.models import Sum
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


# Create your models here.
# Django creates an id (primary key) automatically
class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, first_name=None, last_name=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, first_name=None, last_name=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(username, email, password, first_name, last_name, **extra_fields)

class User(AbstractBaseUser):
    username = models.CharField(max_length=40, unique=True)
    email = models.EmailField(max_length=40, unique=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)
    
    def __str__(self):
        return self.username

class Users_info(models.Model):
    user = models.OneToOneField(
        User, related_name="info", on_delete=models.CASCADE, primary_key=True
    )
    height = models.IntegerField()
    age = models.PositiveIntegerField()
    start_weight = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    goal_weight = models.DecimalField(max_digits=5, decimal_places=2)
    daily_calories = models.IntegerField()
    goal = models.CharField(255)

    def __str__(self):
        return f"Info for {self.user.first_name} {self.user.last_name}"
    
class FoodItem(models.Model):
    name = models.CharField(max_length=40, primary_key=True)
    calories = models.PositiveIntegerField()
    protein = models.DecimalField(max_digits=6, decimal_places=2)
    carbs = models.DecimalField(max_digits=6, decimal_places=2)
    fat = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name


class UserFoodLog(models.Model):
    user = models.ForeignKey(Users_info, on_delete=models.CASCADE)
    date = models.DateField()
    food_item = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    servings = models.PositiveIntegerField()

def user_food_log_summary(request, user_id, date):
    # Retrieve the user's profile
    user_profile = Users_info.objects.get(user_id=user_id)

    # Query all food items logged by the user for the specified date
    user_food_logs = UserFoodLog.objects.filter(user=user_profile, date=date)

    # Calculate the total macros intake for the day
    total_calories = user_food_logs.aggregate(total_calories=Sum('food_itemcalories'))['total_calories']
    total_protein = user_food_logs.aggregate(total_protein=Sum('food_itemprotein'))['total_protein']
    total_carbohydrates = user_food_logs.aggregate(total_carbohydrates=Sum('food_itemcarbohydrates'))['total_carbohydrates']
    total_fat = user_food_logs.aggregate(total_fat=Sum('food_itemfat'))['total_fat']

    context = {
        'user_profile': user_profile,
        'date': date,
        'user_food_logs': user_food_logs,
        'total_calories': total_calories,
        'total_protein': total_protein,
        'total_carbohydrates': total_carbohydrates,
        'total_fat': total_fat,
    }