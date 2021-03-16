from .models import Content
from rest_framework import viewsets, permissions
from .serializers import ContentSerializer

class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContentSerializer
