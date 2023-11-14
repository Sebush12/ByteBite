import graphene
from django import forms
from graphene_django.forms import mutation
from graphene_django import DjangoObjectType, DjangoListField
from .forms import UsersForm, UserUpdateForm
from .models import Users, Users_info, FoodItem, UserFoodLog
from graphene_django.types import DjangoObjectType
from django.contrib.auth import authenticate, login, logout


class UsersType(DjangoObjectType):
    class Meta:
        model = Users
        

class CreateUser(graphene.Mutation):
    users = graphene.Field(UsersType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)
    
    def mutate(self, info, username, password, first_name, last_name, email):
        users = Users(username=username, first_name=first_name, last_name=last_name, email=email)
        users.set_password(password)
        users.save()
        return CreateUser(users=users)

class LoginUser(graphene.Mutation):
    users = graphene.Field(UsersType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(self, info, username, password):
        users = authenticate(info.context, username=username, password=password)
        if users is not None:
            login(info.context, users)
            return LoginUser(users=users)
        else:
            raise Exception("Invalid username or password")

class LogoutUser(graphene.Mutation):
    success = graphene.Boolean()

    def mutate(self, info):
        logout(info.context)
        return LogoutUser(success=True)

class ChangePassword(graphene.Mutation):
    users = graphene.Field(UsersType)

    class Arguments:
        email = graphene.String(required=True)
        old_password = graphene.String(required=True)
        new_password = graphene.String(required=True)

    def mutate(self, info, email, old_password, new_password):
        users = Users.objects.get(email=email)

        if users.check_password(old_password):
            users.set_password(new_password)
            users.save()
            return ChangePassword(users=users)
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

"""
class createUser(mutation.DjangoModelFormMutation):
    user = graphene.Field(UsersType)

    class Meta:
        formCl = UsersForm
    def perform_mutate(cls,form,info):
        user = form.save()
        return cls(user=user)

class updateUser(mutation.DjangoModelFormMutation):
    user = graphene.Field(UsersType)

    class Meta:
        formCl = UserUpdateForm
    def perform_mutate(cls,form,info):
        user = form.save()
        return cls(user=user)
"""
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
    all_users = graphene.List(UsersType)
    all_users_info = graphene.List(Users_InfoType)

    def resolve_all_users(root, info):
        return Users.objects.all()

    def resolve_all_users_info(root, info):
        return Users_info.objects.all()

"""
class Mutation(graphene.ObjectType):
    create_user = createUser.Field()
    update_user = updateUser.Field()
schema = graphene.Schema(query=Query, mutation=Mutation)
"""

schema = graphene.Schema(query=Query, mutation=Mutation)