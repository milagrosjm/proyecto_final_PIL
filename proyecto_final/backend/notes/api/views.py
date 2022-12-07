# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from notes.models import Notes

# Serializers imports
from notes.api.serializers import NoteSerializer

#Helpers imports
from notes.notes_helper  import noteExists

# Create your views here.
class NotesApiView(APIView):

    def get(self, request, user_id):
        """List of all notes from user"""

        notes = Notes.objects.filter(user_id=user_id)
        note_serializer = NoteSerializer(notes, many=True)

        return Response(
            data=note_serializer.data,
            
        )

class NoteCreateApiView(APIView):
    def post(self, request):
            """New note"""

            serializer = NoteSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()

                return Response(
                    {'message': 'Nota creada correctamente'},
                    status=status.HTTP_201_CREATED
                )

            return Response(
                data=serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )


class NoteDetailApiView(APIView):

    def get(self, request, id):
        """Returns a note"""

        note = Notes.objects.get(id=id)
        note_serializer = NoteSerializer(note)

        return Response(
            data=note_serializer.data,
            status=status.HTTP_200_OK
        )
    
    def put(self, request, id):
        
        response = noteExists(id)

        if response[0]:

            heroe_serializer = NoteSerializer(response[1], data=request.data)

            if heroe_serializer.is_valid():
                heroe_serializer.save()
                
                data = {
                    'mensaje': 'Put funciona'
                }

                return Response(
                    data=heroe_serializer.data,
                    status=status.HTTP_200_OK
                )

        return Response(
            data=heroe_serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, id):
        
        heroe = Notes.objects.get(id=id)
        heroe.delete()

        data = {
            'mensaje': 'El delete funciona'
        }

        return Response(
            data=data,
            status=status.HTTP_200_OK
        )