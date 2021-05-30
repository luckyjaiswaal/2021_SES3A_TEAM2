from django.urls import path
from .views import get_sentiment, get_tweets
from .views import get_stocks

urlpatterns = [
    path('get_tweets/', get_tweets),
    path('get_stocks/', get_stocks),
    path('get_sentiment/', get_sentiment),
]
