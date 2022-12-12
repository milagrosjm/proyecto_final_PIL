from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin, UserManager

import binascii
import os

from django.db import models
from django.utils.translation import ugettext_lazy as _


"""class UserManager(BaseUserManager):
    def _create_user(self, username, email, name,lastname, password, is_staff, is_superuser, **extra_fields):
        user = self.model(
            username = username,
            email = email,
            name = name,
            lastname = lastname,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, email, name,lastname, password=None, **extra_fields):
        return self._create_user(username, email, name,lastname, password, False, False, **extra_fields)

    def create_superuser(self, username, email, name,lastname, password=None, **extra_fields):
        return self._create_user(username, email, name,lastname, password, True, True, **extra_fields)"""


# Create your models here.
class User(models.Model):
#Atributos

    username = models.CharField(
        primary_key=True,
        max_length=15,
        unique=True,
        verbose_name="Usuario"

    )
    name = models.CharField(
        max_length=50,
        verbose_name='Nombre'
    )

    lastname = models.CharField(
        max_length=50,
        verbose_name='Apellido'
    )

    email = models.EmailField(
        max_length=70,
        verbose_name='Email'
    )

    password = models.CharField(
        max_length=150,
        verbose_name='Contraseña'
    )

    is_active = models.BooleanField(
        default = True
    )
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    """USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','name','lastname']"""

    def __str__(self):
        return self.name


class MyOwnToken(models.Model):
    ...
    key: str = models.CharField(_("Key"), max_length=40, primary_key=True)
    user: User = models.OneToOneField(
            User, related_name='auth_token',
            on_delete=models.CASCADE, 
            verbose_name=_("User")
    )
    created = models.DateTimeField(_("Created"), auto_now_add=True)
    ...

    class Meta:
        verbose_name = _("Token")
        verbose_name_plural = _("Tokens")

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        return super(MyOwnToken, self).save(*args, **kwargs)

    def generate_key(self):
        return binascii.hexlify(os.urandom(20)).decode()

    def __str__(self):
        return self.key