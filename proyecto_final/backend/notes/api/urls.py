# Django imports
from django.urls import path

# Views imports
from notes.api.views import NotesApiView


# Urls
urlpatterns = [
    path(
        'notes/<str:user_id>/', NotesApiView.as_view(), name='notes_api'
    ),
]