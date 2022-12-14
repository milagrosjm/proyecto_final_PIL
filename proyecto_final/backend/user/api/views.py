# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication

# Django imports
from django.contrib.sessions.models import Session
from django.contrib.auth import authenticate

# Python imports
from datetime import datetime

# Models imports
from user.models import User, MyOwnToken
from notes.models import Notes

# Serializers imports
from user.api.serializers import UserSerializer, UserTokenSerializer


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
                    {'message': 'Usuario creado correctamente'},
                    status=status.HTTP_201_CREATED
                )

            return Response(
                data=serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

class UserDetailApiView(APIView):

    def get(self, request, username):
        """Returns user"""

        user = User.objects.get(pk=username)
        user_serializer = UserSerializer(user)

        return Response(
            data=user_serializer.data,
            status=status.HTTP_200_OK
        )

    def put(self, request, username):
        """Update user"""

        user = User.objects.get(pk=username)
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.create(request.data)

            return Response(
                {'message': 'Usuario modificado correctamente'},
                status=status.HTTP_200_OK
            )
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, username):
        """Delete user"""
        try:
            Notes.objects.filter(user=username).delete()
            User.objects.filter(username=username).delete()

            return Response(
            {'message': 'Usuario eliminado correctamente'},
            status=status.HTTP_200_OK
        )
        except User.DoesNotExist:
            return Response(
            {'message': 'El usuario no pudo eliminarse'},
            status=status.HTTP_400_BAD_REQUEST
        )
        
class Login(APIView):

    def post(self, request, *args, **kwargs):
        """Login user"""

        try:
            loginuser = User.objects.get(username=request.data['username'], password=request.data['password'])
            user_serializer = UserSerializer(loginuser)
            token, created = MyOwnToken.objects.get_or_create(user=user_serializer.instance)
            if created:
                response = Response(
                    {'token': token.key,
                    'user': user_serializer.data
                    },
                    status=status.HTTP_200_OK
                )
                response.set_cookie(key='token', value=token.key,httponly=True)
                return response 
                
            else:
                #print('pasa por aca')
                token.delete()
                token = MyOwnToken.objects.create(user=user_serializer.instance)
                response = Response(
                    {'token': token.key,
                    'user': user_serializer.data
                    },
                    status=status.HTTP_200_OK
                )
                response.set_cookie(key='token', value=token.key, httponly=True)
                return response 

        except User.DoesNotExist:
            return Response(
                {'error': 'Usuario o contraseña incorrectos'},
                status=status.HTTP_400_BAD_REQUEST
            )        

    
