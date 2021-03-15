from django.db import models

class Content(models.Model):
    location = models.CharField(max_length = 50)
    title = models.CharField(max_length = 250)
    text = models.TextField(max_length = 4000)
    def __str__(self):
        return self.title
