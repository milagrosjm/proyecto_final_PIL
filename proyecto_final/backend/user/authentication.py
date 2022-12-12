from rest_framework.authentication import TokenAuthentication
from user.models import MyOwnToken

class MyOwnTokenAuthentication(TokenAuthentication):
    model = MyOwnToken

