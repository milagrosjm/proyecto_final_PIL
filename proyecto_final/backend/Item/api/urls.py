# Django imports
from django.urls import path

# Views imports
from Item.api.views import ItemCreateApiView


# Urls
urlpatterns = [
    path(
        'createToDoItem/', ItemCreateApiView.as_view(), name='note_api'
    ),
]