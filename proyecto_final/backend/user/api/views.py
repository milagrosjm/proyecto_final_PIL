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
import random

# Models imports
from user.models import User, MyOwnToken

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

        user = User.objects.get(pk=pk)
        user_serializer = UserSerializer(user)

        return Response(
            data=user_serializer.data,
            status=status.HTTP_200_OK
        )

    def put(self, request, pk):
        """Update user"""

        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.create(request.data)

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

        user = User.objects.get(pk=pk)
        user.delete()

        return Response(
            {'message': 'User eliminado correctamente'},
            status=status.HTTP_200_OK
        )

"""class UserGetTokenApiView(APIView):
    def post(self, request):"""
class Login(APIView):

    def post(self, request, *args, **kwargs):

        """login_serializer = self.serializer_class(data=request.data, context = {'request':request})
        print(login_serializer)"""
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
            print(ValueError)
            return Response(
                {'error': 'Username o password incorrectos'},
                status=status.HTTP_400_BAD_REQUEST
            )        

    
