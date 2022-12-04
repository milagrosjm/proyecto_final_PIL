# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from user.models import User

# Serializers imports
from user.api.serializers import UserSerializer

# Create your views here.
class UserApiView(APIView):

    def get(self, request):
        """List of all users"""

        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)

        return Response(
            data=user_serializer.data,
            status=status.HTTP_200_OK
        )

class UserCreateApiView(APIView):
    def post(self, request):
            """New registry"""

            serializer = UserSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()

                return Response(
                    {'message': 'User creado correctamente'},
                    status=status.HTTP_201_CREATED
                )

            return Response(
                data=serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )


class UserDetailApiView(APIView):

    def get(self, request, pk):
        """Returns user"""

        hero = User.objects.get(pk=pk)
        hero_serializer = UserSerializer(hero)

        return Response(
            data=hero_serializer.data,
            status=status.HTTP_200_OK
        )

    def put(self, request, pk):
        """Update user"""

        hero = User.objects.get(pk=pk)
        serializer = UserSerializer(hero, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'User modificado correctamente'},
                status=status.HTTP_200_OK
            )
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        """Delete user"""

        hero = User.objects.get(pk=pk)
        hero.delete()

        return Response(
            {'message': 'User eliminado correctamente'},
            status=status.HTTP_200_OK
        )