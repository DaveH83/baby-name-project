# Generated by Django 4.2 on 2023-04-27 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('names_app', '0003_alter_session_names_baby_name_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='baby_names',
            name='popularity',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
