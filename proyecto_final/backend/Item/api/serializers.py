# Rest imports
from rest_framework import serializers

# Models imports
from Item.models import Item

# Serializers
class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = '__all__'