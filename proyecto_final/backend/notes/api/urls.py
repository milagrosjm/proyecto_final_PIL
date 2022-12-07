# Django imports
from django.urls import path

# Views imports
from notes.api.views import NotesApiView, NoteDetailApiView, NoteCreateApiView


# Urls
urlpatterns = [
    path(
        'notes/<str:user_id>/', NotesApiView.as_view(), name='notes_api'
    ),
     path(
        'note/<int:id>/', NoteDetailApiView.as_view(), name='note_api'
    ),
    path(
        'createNote/', NoteCreateApiView.as_view(), name='note_api'
    ),
]