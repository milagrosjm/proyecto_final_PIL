# Generated by Django 3.2.16 on 2022-12-11 19:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_user_is_bool'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='is_active',
            new_name='is_activeted',
        ),
    ]
