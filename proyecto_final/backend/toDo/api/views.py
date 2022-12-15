# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.permissions import IsAuthenticated

# Models imports
from toDo.models import toDo
from Item.models import Item

# Serializers imports
from toDo.api.serializers import ToDoSerializer

#Helpers imports
from toDo.toDo_helper  import toDoExists
# Create your views here.
class ToDoApiView(APIView):

    def get(self, request, user_id):
        """List of all checklists from user"""

        toDoList = toDo.objects.filter(user_id=user_id)
        toDo_serializer = ToDoSerializer(toDoList, many=True)

        return Response(
            data=toDo_serializer.data,
        )

class ToDoCreateApiView(APIView):
    def post(self, request):
            """New checklist"""
            serializer = ToDoSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()

                return Response(
                    data=serializer.data,
                    status=status.HTTP_201_CREATED
                )

            return Response(
                data=serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )


class ToDoDetailApiView(APIView):

    def get(self, request, id):
        """Returns a checklist"""

        toDo_detail = toDo.objects.get(id=id)
        toDo_serializer = ToDoSerializer(toDo_detail)

        return Response(
            data=toDo_serializer.data,
            status=status.HTTP_200_OK
        )
    
    def put(self, request, id):
        
        response = toDoExists(id)

        if response[0]:

            toDo_serializer = ToDoSerializer(response[1], data=request.data)

            if toDo_serializer.is_valid():
                toDo_serializer.save()
                
                data = {
                    'mensaje': 'Put funciona'
                }

                return Response(
                    data=toDo_serializer.data,
                    status=status.HTTP_200_OK
                )

        return Response(
            data=toDo_serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, id):
        
        Item.objects.filter(toDo=id).delete()
        note = toDo.objects.get(id=id)
        note.delete()

        data = {
            'mensaje': 'El delete funciona'
        }

        return Response(
            data=data,
            status=status.HTTP_200_OK
        )