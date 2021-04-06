from django.shortcuts import render
from rest_framework import generics, viewsets
from .serializers import CompanySerializer, UserSerializer
from .models import Company
from rest_framework.views import APIView
from django.contrib.auth.models import User


# Create your views here.


class CompanyView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer