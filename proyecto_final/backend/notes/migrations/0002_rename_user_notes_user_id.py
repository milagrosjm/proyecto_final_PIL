# Generated by Django 3.2.16 on 2022-12-13 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notes',
            old_name='user',
            new_name='user_id',
        ),
    ]
