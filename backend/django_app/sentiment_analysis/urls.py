from django.urls import path
from .views import get_tweets

urlpatterns = [
    path('get_tweets/', get_tweets)
]