import graphene
from graphene_django.types import DjangoObjectType
from .models import Users_info, Exercise

class ExerciseType(DjangoObjectType):
    class Meta:
        model = Exercise
        fields = '__all__'

class UsersInfoType(DjangoObjectType):
    class Meta:
        model = Users_info
        fields = "__all__"
    
    exercises = graphene.List(ExerciseType)

    def resolve_exercises(self, info):
        return self.exercises.all()