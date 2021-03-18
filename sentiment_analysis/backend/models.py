from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=30, unique=True)
    ticker = models.CharField(max_length=5, unique=True)
    latest_sentiment_score = models.FloatField(max_length=4)
    latest_stock_price = models.FloatField()
    daily_sentiment_trend = models.FloatField()
    daily_stock_trend = models.FloatField()
