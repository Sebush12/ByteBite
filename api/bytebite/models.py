from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.shortcuts import render
from django.db.models import Sum
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from decimal import Decimal


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
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female')
    ]
    user = models.OneToOneField(
        User, related_name="info", on_delete=models.CASCADE, primary_key=True
    )
    height = models.IntegerField()
    age = models.PositiveIntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    goal_weight = models.DecimalField(max_digits=5, decimal_places=2)
    daily_calories = models.IntegerField()
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default='male')

    def __str__(self):
        return f"Info for {self.user.first_name} {self.user.last_name}"

class Exercise(models.Model):
    user_info = models.ForeignKey(Users_info, related_name="exercises", on_delete=models.CASCADE, null=True, blank=True)
    workout_time = models.IntegerField()
    calories_consumed = models.IntegerField()

    class Meta:
        db_table = 'bytebite_exercise'

class FoodItem(models.Model):
    name = models.CharField(max_length=40, primary_key=True)
    calories = models.PositiveIntegerField()
    protein = models.DecimalField(max_digits=6, decimal_places=2)
    carbs = models.DecimalField(max_digits=6, decimal_places=2)
    fat = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name


class UserFoodLog(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey("Users_info", on_delete=models.CASCADE)
    date = models.DateField()
    food_item = models.ForeignKey("FoodItem", on_delete=models.CASCADE)
    servings = models.PositiveIntegerField()

# Define a function to calculate total macros
def calculate_total_macros(user_food_logs):
    total_calories = user_food_logs.aggregate(total_calories=Sum('food_item__calories'))['total_calories']
    total_protein = user_food_logs.aggregate(total_protein=Sum('food_item__protein'))['total_protein']
    total_carbohydrates = user_food_logs.aggregate(total_carbohydrates=Sum('food_item__carbs'))['total_carbohydrates']
    total_fat = user_food_logs.aggregate(total_fat=Sum('food_item__fat'))['total_fat']

    return (
        Decimal(str(total_calories)) if total_calories is not None else None,
        Decimal(str(total_protein)) if total_protein is not None else None,
        Decimal(str(total_carbohydrates)) if total_carbohydrates is not None else None,
        Decimal(str(total_fat)) if total_fat is not None else None,
    )

# Function to retrieve user profile and calculate macros
def user_food_log_summary(user_id, date):
    try:
        user_profile = Users_info.objects.get(user_id=user_id)
    except Users_info.DoesNotExist:
        raise Exception("User not found.")

    user_food_logs = UserFoodLog.objects.filter(user=user_profile, date=date)

    return calculate_total_macros(user_food_logs)