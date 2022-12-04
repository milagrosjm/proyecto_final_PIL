# Generated by Django 3.2.16 on 2022-12-04 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('username', models.CharField(max_length=15, primary_key=True, serialize=False, unique=True, verbose_name='Usuario')),
                ('name', models.CharField(max_length=50, verbose_name='Nombre')),
                ('lastname', models.CharField(max_length=50, verbose_name='Apellido')),
                ('email', models.EmailField(max_length=70, verbose_name='Email')),
                ('password', models.CharField(max_length=20, verbose_name='Contraseña')),
            ],
            options={
                'verbose_name': 'Heroe',
                'verbose_name_plural': 'Heroes',
            },
        ),
    ]