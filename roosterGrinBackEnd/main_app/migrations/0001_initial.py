# Generated by Django 3.1.2 on 2021-03-15 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=250)),
                ('text', models.TextField(max_length=4000)),
            ],
        ),
    ]
