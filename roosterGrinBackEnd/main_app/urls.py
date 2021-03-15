from django.urls import path
from . import views

urlpatterns = [
    path('content/<str:location>/', views.get_content),
    path('content/<str:location>/edit/', views.update_content)
]
