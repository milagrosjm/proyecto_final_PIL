from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from heroes.models import Hero
from heroes.serializer import HeroSerializer


# Create your views here.

class HeroApiView(APIView):

    def get(self, request):
        """Retorna una lista con todos los heroes"""

        #Busco los objetos heroes que tengo en la base de datos
        heroes = Hero.objects.all()

        #Serializo para poder enviar al front
        heroes_serializer = HeroSerializer(heroes, many=True)
        
        return Response(data=heroes_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        pass
    


class ModificarHeroeApiView(APIView):

    def put(self, request, id):
        """"Modifica el heroe"""

