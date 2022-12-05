# Django imports
from django.urls import path

# Views imports
from user.api.views import UserApiView, UserDetailApiView, UserCreateApiView


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
]