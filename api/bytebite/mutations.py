from api.bytebite.schema import UsersType
import graphene
from graphene_django.forms import mutation
from .models import Users
from .forms import UsersForm, UserUpdateForm

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