import graphene
from graphene_django.types import DjangoObjectType
from .models import Users_info

class UsersInfoType(DjangoObjectType):
    class Meta:
        model = Users_info
        fields = "__all__"