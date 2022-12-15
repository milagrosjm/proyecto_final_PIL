# Rest imports
from rest_framework import serializers

# Models imports
from user.models import User

# Serializers
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

    """def create(self, validated_data):
        user = User(**validated_data)
        return user"""
    
    """
    def update(self, instance, validated_data):
        update_user = super().update(instance, validated_data)
        update_user.set_password(validated_data['password'])
        update_user.save()


        return update_user"""

class UserTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'password',
        )