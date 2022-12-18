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
class ItemApiView(APIView):

    def get(self, request, id):
        """List of all items from toDo"""

        items = Item.objects.filter(toDo_id=id)
        items_serializer = ItemSerializer(items, many=True)

        return Response(
            data=items_serializer.data,
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


class ItemsDetailApiView(APIView):
    
    def put(self, request, id):
        
        response = itemExists(id)

        if response[0]:

            item_serializer = ItemSerializer(response[1], data=request.data)

            if item_serializer.is_valid():
                item_serializer.save()
                
                data = {
                    'mensaje': 'Put funciona'
                }

                return Response(
                    data=item_serializer.data,
                    status=status.HTTP_200_OK
                )

        return Response(
            data=item_serializer.errors,
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