import graphene
from django import forms
from graphene_django.forms import mutation
from graphene_django import DjangoObjectType, DjangoListField
from .forms import UserForm, UserUpdateForm
from .models import User, Users_info, FoodItem, UserFoodLog
from graphene_django.types import DjangoObjectType
from django.contrib.auth import authenticate, login, logout


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

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    login_user = LoginUser.Field()
    logout_user = LogoutUser.Field()
    change_password = ChangePassword.Field()
    create_food_item = FoodItemMutation.Field()

class Users_InfoType(DjangoObjectType):
    class Meta:
        model = Users_info
        fields = "__all__"

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
    all_users_info = graphene.List(Users_InfoType)
    user_by_id = graphene.Field(UserType, id=graphene.ID(required=True))

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_users_info(root, info):
        return Users_info.objects.all()
    
    def resolve_user_by_id(self, info, id):
        # Implement the logic to retrieve a user by ID from the database
        return User.objects.get(pk=id)

schema = graphene.Schema(query=Query, mutation=Mutation)