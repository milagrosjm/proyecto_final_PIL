from django.contrib import admin
from user.models import User, MyOwnToken

# Register your models here.
admin.site.register(User)
admin.site.register(MyOwnToken)