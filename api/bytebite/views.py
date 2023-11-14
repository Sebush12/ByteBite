from django.shortcuts import render
from graphene_django.views import GraphQLView
from django.contrib.auth import login

class CustomGraphQLView(GraphQLView):
    def dispatch(self, request, *args, **kwargs):
        response = super().dispatch(request, *args, **kwargs)
        
        # Check if the GraphQL mutation was a successful login
        if response.status_code == 200 and 'loginUser' in response.json().get('data', {}):
            # Assuming the authenticated user is returned in the 'user' field
            authenticated_user = response.json()['data']['loginUser']['user']
            # Log in the user
            login(request, authenticated_user)

        return response