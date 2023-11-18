from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.views import LoginView
from graphene_django.views import GraphQLView
from .views import custom_login, custom_logout

urlpatterns = [
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path('login/', LoginView.as_view(), name='login'),
    path('custom-login/', custom_login, name='custom_login'),
    path('custom-logout/', custom_logout, name='custom_logout'),
    ]
