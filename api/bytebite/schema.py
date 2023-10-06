import graphene

from graphene_django import DjangoObjectType, DjangoListField
from .models import Users


class UsersType(DjangoObjectType):
    class Meta:
        model = Users
        fields = "__all__"


class Query(graphene.ObjectType):
    all_users = graphene.List(UsersType)
    User_by_name = graphene.Field(UsersType, last_name=graphene.String(required=True))

    def resolve_all_users(root, info):
        # We can easily optimize query count in the resolve method
        return Users.objects.select_related("id").all()

    def resolve_user_by_last_name(root, info, last_name):
        try:
            return Users.objects.get(last_name=last_name)
        except Users.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)
