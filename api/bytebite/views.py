from django.shortcuts import render
from graphene_django.views import GraphQLView
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout

@csrf_exempt
@require_POST
def custom_login(request):
    """
    Custom login view for handling login via GraphQL mutation.
    Expects POST request with 'username' and 'password' parameters.
    """
    username = request.POST.get('username')
    password = request.POST.get('password')

    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return JsonResponse({'success': True, 'message': 'Login successful'})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid login credentials'})

@login_required
def custom_logout(request):
    """
    Custom logout view for handling logout via GraphQL mutation.
    """
    logout(request)
    return JsonResponse({'success': True, 'message': 'Logout successful'})