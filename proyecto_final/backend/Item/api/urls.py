# Django imports
from django.urls import path

# Views imports
from Item.api.views import ItemCreateApiView, ItemApiView, ItemsDetailApiView

# Urls
urlpatterns = [
    path(
        'createToDoItem/', ItemCreateApiView.as_view(), name='note_api'
    ),
    path(
        'toDoItems/<int:id>/', ItemApiView.as_view(), name='note_api'
    ),
    path(
        'itemsDetail/<int:id>/', ItemsDetailApiView.as_view(), name='note_api'
    ),
]