import graphene
from django import forms
from graphene_django.forms import mutation
from graphene_django import DjangoObjectType, DjangoListField
from .forms import UserForm, UserUpdateForm
from .models import User, Users_info, FoodItem, UserFoodLog, Exercise
from graphene_django.types import DjangoObjectType
from django.contrib.auth import authenticate, login, logout
from .types import UsersInfoType, ExerciseType
from decimal import Decimal


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ("id", "username", "email", "first_name", "last_name",)

    id = graphene.ID()

    def resolve_id(self, info):
        return self.id

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)
    
    def mutate(self, info, username, password, first_name, last_name, email):
        user = User(username=username, first_name=first_name, last_name=last_name, email=email)
        user.set_password(password)
        user.save()    
        return CreateUser(user=user)

class CreateUsersInfo(graphene.Mutation):
    users_info = graphene.Field(UsersInfoType)

    class Arguments:
        height = graphene.Int(required=True)
        age = graphene.Int(required=True)
        weight = graphene.Float(required=True)
        goal_weight = graphene.Float(required=True)
        daily_calories = graphene.Int(required=True)
        gender = graphene.String(required=True)

    def mutate(self, info, height, age, weight, goal_weight, daily_calories, gender):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception("You must be logged in to perform this action.")

        weight_decimal = Decimal(str(weight))
        goal_weight_decimal = Decimal(str(goal_weight))

        users_info = Users_info(
            user=user,
            height=height,
            age=age,
            weight=weight_decimal,
            goal_weight=goal_weight_decimal,
            daily_calories=daily_calories,
            gender=gender,
        )
        users_info.save()

        return CreateUsersInfo(users_info=users_info)

class CreateUserAndInfo(graphene.Mutation):
    user = graphene.Field(UserType)
    users_info = graphene.Field(UsersInfoType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)
        height = graphene.Int(required=True)
        age = graphene.Int(required=True)
        weight = graphene.Float(required=True)
        goal_weight = graphene.Float(required=True)
        daily_calories = graphene.Int(required=True)
        gender = graphene.String(required=True)

    def mutate(self, info, username, password, first_name, last_name, email, height, age, weight, goal_weight, daily_calories, gender):
        # Create User
        user = User(username=username, first_name=first_name, last_name=last_name, email=email)
        user.set_password(password)
        user.save()

        # Create UsersInfo
        weight_decimal = Decimal(str(weight))
        goal_weight_decimal = Decimal(str(goal_weight))

        users_info = Users_info(
            user=user,
            height=height,
            age=age,
            weight=weight_decimal,
            goal_weight=goal_weight_decimal,
            daily_calories=daily_calories,
            gender=gender,
        )
        users_info.save()

        return CreateUserAndInfo(user=user, users_info=users_info)

class UpdateUsersInfo(graphene.Mutation):
    users_info = graphene.Field(UsersInfoType)

    class Arguments:
        email = graphene.String(required=True)
        height = graphene.Int(required=True)
        age = graphene.Int(required=True)
        weight = graphene.Float(required=True)
        goal_weight = graphene.Float(required=True)
        daily_calories = graphene.Int(required=True)
        gender = graphene.String(required=True)

    def mutate(self, info, email, height, age, weight, goal_weight, daily_calories, gender):
        try:
            users_info = Users_info.objects.get(user__email=email)
        except Users_info.DoesNotExist:
            raise Exception("User not found.")

        users_info.height = height
        users_info.age = age
        users_info.weight = Decimal(str(weight))
        users_info.goal_weight = Decimal(str(goal_weight))
        users_info.daily_calories = daily_calories
        users_info.gender = gender
        users_info.save()

        return UpdateUsersInfo(users_info=users_info)

class LoginUser(graphene.Mutation):
    success = graphene.Boolean()
    message = graphene.String()
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(self, info, username, password):
        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                login(info.context, user)
                # Create a UserType instance to return
                user_instance = UserType(
                    id=user.id,
                    username=user.username,
                    email=user.email,
                    first_name=user.first_name,
                    last_name=user.last_name, 
                    # Include other fields you want to return
                )
                return LoginUser(success=True, message="Login successful", user=user_instance)
            else:
                return LoginUser(success=False, message="Invalid password", user=None)
        except User.DoesNotExist:
            return LoginUser(success=False, message="User not found", user=None)

class LogoutUser(graphene.Mutation):
    success = graphene.Boolean()

    def mutate(self, info):
        logout(info.context)
        return LogoutUser(success=True)

class ChangePassword(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        email = graphene.String(required=True)
        old_password = graphene.String(required=True)
        new_password = graphene.String(required=True)

    def mutate(self, info, email, old_password, new_password):
        user = User.objects.get(email=email)

        if user.check_password(old_password):
            user.set_password(new_password)
            user.save()
            return ChangePassword(user=user)
        else:
            raise Exception("Old password is incorrect.")

class FoodItemType(DjangoObjectType):
    class Meta:
        model = FoodItem

class FoodItemMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        calories = graphene.Int(required=True)
        protein = graphene.Decimal(required=True)
        carbs = graphene.Decimal(required=True)
        fat = graphene.Decimal(required=True)

    food_item = graphene.Field(FoodItemType)

    @classmethod
    def mutate(cls, root, info, name, calories, protein, carbs, fat):
        food_item = FoodItem(name=name, calories=calories, protein=protein, carbs=carbs, fat=fat)
        food_item.save()
        return FoodItemMutation(food_item=food_item)

class CreateExercise(graphene.Mutation):
    exercise = graphene.Field(ExerciseType)

    class Arguments:
        user_info_id = graphene.Int(required=True)
        workout_time = graphene.Int(required=True)
        calories_consumed = graphene.Int(required=True)

    def mutate(self, info, user_info_id, workout_time, calories_consumed):
        user_info = Users_info.objects.get(pk=user_info_id)

        exercise = Exercise(
            user_info=user_info,
            workout_time=workout_time,
            calories_consumed=calories_consumed,
        )
        exercise.save()

        return CreateExercise(exercise=exercise)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    login_user = LoginUser.Field()
    logout_user = LogoutUser.Field()
    change_password = ChangePassword.Field()
    create_food_item = FoodItemMutation.Field()
    create_users_info = CreateUsersInfo.Field()
    update_users_info = UpdateUsersInfo.Field()
    create_user_and_info = CreateUserAndInfo.Field()
    create_exercise = CreateExercise.Field()


class FoodItemType(DjangoObjectType):
    class Meta:
        model = FoodItem
        fields = ("name", "calories", "protein", "carbs", "fat")

class UserFoodLogType(DjangoObjectType):
    class Meta:
        model = UserFoodLog
        fields = ("user", "date", "food_item", "servings")

class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_users_info = graphene.List(UsersInfoType)
    user_by_id = graphene.Field(UserType, id=graphene.ID(required=True))

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_users_info(root, info):
        return Users_info.objects.all()
    
    def resolve_user_by_id(self, info, id):
        # Implement the logic to retrieve a user by ID from the database
        return User.objects.get(pk=id)

class QueryUsersInfo(graphene.ObjectType):
    users_info = graphene.Field(UsersInfoType)

    def resolve_users_info(self, info):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception("You must be logged in to perform this action.")

        try:
            user_info = Users_info.objects.get(user=user)
            return user_info
        except Users_info.DoesNotExist:
            print("User info not found.")
            return None

class Query(graphene.ObjectType):
    user_info_by_email = graphene.Field(
        UsersInfoType, 
        id=graphene.ID(),  # Allow querying by ID
        email=graphene.String(),  # Allow querying by email
    )

    def resolve_user_info_by_email(self, info, id=None, email=None):
        try:
            if id is not None:
                # If ID is provided, query by ID
                user_info = Users_info.objects.get(user__id=id)
            elif email is not None:
                # If email is provided, query by email (case-insensitive)
                user_info = Users_info.objects.get(user__email__iexact=email)
            else:
                # If neither ID nor email is provided, return None
                return None

            return user_info
        except UsersInfo.DoesNotExist:
            return None

schema = graphene.Schema(query=Query, mutation=Mutation)