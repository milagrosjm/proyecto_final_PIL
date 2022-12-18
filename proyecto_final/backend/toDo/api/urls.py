# Django imports
from django.urls import path

# Views imports
from toDo.api.views import ToDoApiView, ToDoDetailApiView, ToDoCreateApiView

# Urls
urlpatterns = [
    path(
        'toDo/<str:user_id>/', ToDoApiView.as_view(), name='notes_api'
    ),
     path(
        'toDoDetail/<int:id>/', ToDoDetailApiView.as_view(), name='note_api'
    ),
    path(
        'createToDo/', ToDoCreateApiView.as_view(), name='note_api'
    ),
]