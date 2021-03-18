from rest_framework import serializers
from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'ticker', 'latest_sentiment_score',
                  'latest_stock_price', 'daily_sentiment_trend', 'daily_stock_trend')
