# Rest imports
from rest_framework import serializers

# Models imports
from toDo.models import toDo

# Serializers
class ToDoSerializer(serializers.ModelSerializer):

    class Meta:
        model = toDo
        fields = '__all__'