# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from Item.models import Item

# Serializers imports
from Item.api.serializers import ItemSerializer

#Helpers imports
from Item.item_helper  import itemExists
# Create your views here.
class ToDoApiView(APIView):

    def get(self, request, user_id):
        """List of all checklists from user"""

        toDo = toDo.objects.filter(user_id=user_id)
        toDo_serializer = ItemSerializer(toDo, many=True)

        return Response(
            data=toDo_serializer.data,
            
        )

class ItemCreateApiView(APIView):
    def post(self, request):
            """New checklist"""
            print(request.data)
            serializer = ItemSerializer(data=request.data)

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

        toDo = toDo.objects.get(id=id)
        toDo_serializer = ItemSerializer(toDo)

        return Response(
            data=toDo_serializer.data,
            status=status.HTTP_200_OK
        )
    
    def put(self, request, id):
        
        response = itemExists(id)

        if response[0]:

            toDo_serializer = ItemSerializer(response[1], data=request.data)

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
        
        note = Item.objects.get(id=id)
        note.delete()

        data = {
            'mensaje': 'El delete funciona'
        }

        return Response(
            data=data,
            status=status.HTTP_200_OK
        )