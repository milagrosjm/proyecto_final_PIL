from django.db import models

from toDo.models import toDo

# Create your models here.

class Item(models.Model):
#Atributos

    id = models.AutoField(
        primary_key=True,
        unique=True,
        verbose_name="Id"

    )

    checked = models.BooleanField(
        default = False
    )

    text = models.CharField(
        max_length=500,
        verbose_name='Texto',
        default=''
    )

    toDo = models.ForeignKey(
        max_length=15,
        verbose_name='Usuario',
        on_delete=models.RESTRICT,
        to=toDo
    )

    class Meta:
        verbose_name = 'toDo'
        verbose_name_plural = 'toDo'

    def __str__(self):
        return self.tittle