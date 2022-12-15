from django.db import models

from user.models import User

# Create your models here.

class toDo(models.Model):
#Atributos

    id = models.AutoField(
        primary_key=True,
        unique=True,
        verbose_name="Id"

    )
    tittle = models.CharField(
        max_length=20,
        verbose_name='Titulo',
        default=' '
    )

    user = models.ForeignKey(
        max_length=15,
        verbose_name='Usuario',
        on_delete=models.RESTRICT,
        to=User
    )

    class Meta:
        verbose_name = 'toDo'
        verbose_name_plural = 'toDo'

    def __str__(self):
        return self.tittle
