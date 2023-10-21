from django import forms
from .models import Users

class UsersForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ['username', 'first_name', 'last_name', 'email', 'password']


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ['username', 'first_name', 'last_name', 'email', 'password']