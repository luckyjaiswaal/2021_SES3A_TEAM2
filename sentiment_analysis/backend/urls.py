from django.urls import path, include
from .views import CompanyView
from rest_framework import routers

from knox import views as knox_views


urlpatterns = [
    path('company', CompanyView.as_view()),
    
    
    
    
   
]
