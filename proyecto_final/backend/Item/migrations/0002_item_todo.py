# Generated by Django 3.2.16 on 2022-12-14 14:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('toDo', '0001_initial'),
        ('Item', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='toDo',
            field=models.ForeignKey(max_length=15, on_delete=django.db.models.deletion.RESTRICT, to='toDo.todo', verbose_name='Usuario'),
        ),
    ]