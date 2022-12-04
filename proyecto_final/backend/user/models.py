from django.db import models

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
        max_length=20,
        verbose_name='Contraseña'
    )

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.name