from .mutations import createUser, updateUser
import graphene
from graphene_django.forms import mutation
from graphene_django import DjangoObjectType, DjangoListField
from .forms import UserForm, UserUpdateForm
from .models import Users, Users_info


class UsersType(DjangoObjectType):
    class Meta:
        model = Users
        fields = "__all__"


class Users_InfoType(DjangoObjectType):
    class Meta:
        model = Users_info
        fields = "__all__"


class Query(graphene.ObjectType):
    all_users = graphene.List(UsersType)
    all_users_info = graphene.List(Users_InfoType)

    def resolve_all_users(root, info):
        return Users.objects.all()

    def resolve_all_users_info(root, info):
        return Users_info.objects.all()

class Mutation(graphene.ObjectType):
    create_user =createUser.Field()
    update_user = updateUser.Field()
schema = graphene.Schema(query=Query, mutation=Mutation)
