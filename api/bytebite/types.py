import graphene
from graphene_django.types import DjangoObjectType
from .models import Users_info, Exercise

class UsersInfoType(DjangoObjectType):
    class Meta:
        model = Users_info
        fields = "__all__"

class ExerciseType(DjangoObjectType):
    class Meta:
        model = Exercise
        fields = '__all__'