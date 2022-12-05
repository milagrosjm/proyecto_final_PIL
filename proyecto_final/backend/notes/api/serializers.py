# Rest imports
from rest_framework import serializers

# Models imports
from notes.models import Notes

# Serializers
class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notes
        fields = '__all__'