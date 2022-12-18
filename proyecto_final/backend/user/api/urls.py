# Django imports
from django.urls import path

# Views imports
from user.api.views import UserApiView, UserDetailApiView, UserCreateApiView, Login

# Urls
urlpatterns = [
    path(
        'users/', UserApiView.as_view(), name='user_api'
    ),
    path(
        'user/<str:username>',UserDetailApiView.as_view(), name='user_deatail_api'
    ),
    path(
        'registry/', UserCreateApiView.as_view(), name='user_create_api'
    ),
    path(
        'login/',Login.as_view(), name='login_api'
    ),
]