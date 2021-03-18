from django.shortcuts import render
from rest_framework import generics
from .serializers import CompanySerializer
from .models import Company

# Create your views here.


class CompanyView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
