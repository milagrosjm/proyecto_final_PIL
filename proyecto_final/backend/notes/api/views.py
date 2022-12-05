# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from notes.models import Notes

# Serializers imports
from notes.api.serializers import NoteSerializer

# Create your views here.
class NotesApiView(APIView):

    def get(self, request, user_id):
        """List of all users"""

        notes = Notes.objects.filter(user_id=user_id)
        note_serializer = NoteSerializer(notes, many=True)

        return Response(
            data=note_serializer.data,
            
        )
