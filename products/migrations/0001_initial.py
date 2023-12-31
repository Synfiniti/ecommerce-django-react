# Generated by Django 5.0 on 2023-12-08 01:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(blank=True, null=True)),
                ('name', models.CharField(blank=True, max_length=250, null=True)),
                ('image', models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to='')),
                ('category', models.CharField(blank=True, max_length=250, null=True)),
                ('description', models.CharField(blank=True, max_length=250, null=True)),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('num_reviews', models.IntegerField(blank=True, default=0, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('count_in_stock', models.IntegerField(blank=True, default=0, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(blank=True, default=0, null=True)),
                ('comment', models.TextField(blank=True, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
