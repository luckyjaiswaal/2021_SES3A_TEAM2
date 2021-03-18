from django.urls import path
from .views import CompanyView

urlpatterns = [
    path('company', CompanyView.as_view())
]
