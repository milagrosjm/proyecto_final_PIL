# Django imports
from django.urls import path

# Views imports
from user.api.views import UserApiView, UserDetailApiView, UserCreateApiView, Login

#Rest framework imports
from rest_framework.authtoken.views import obtain_auth_token


# Urls
urlpatterns = [
    path(
        'users/', UserApiView.as_view(), name='user_api'
    ),
    path(
        'user/<int:pk>',UserDetailApiView.as_view(), name='user_deatail_api'
    ),
    path(
        'registry/', UserCreateApiView.as_view(), name='user_create_api'
    ),
    path(
        'login/',Login.as_view(), name='login_api'
    ),
    path(
        'api-token-auth/', obtain_auth_token, name='api_token_auth'
        ),
]