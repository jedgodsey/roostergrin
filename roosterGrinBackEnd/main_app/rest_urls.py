from django.urls import path
from . import views

from rest_framework import routers
from .api import ContentViewSet

router = routers.DefaultRouter()
router.register('content', ContentViewSet, 'content')

urlpatterns = router.urls
