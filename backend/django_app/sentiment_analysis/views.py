from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
import json
from django.http import HttpResponse

# Create your views here.
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer
from django.contrib.auth import login
from django.contrib.auth import authenticate

from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

# Libraries to help access DB
import csv
import boto3
from boto3.dynamodb.types import TypeDeserializer

# To access environment variables
from dotenv import load_dotenv
load_dotenv()

import os


# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


def get_tweets(request):
    # Just reading from a csv file now til I can get this hooked onto the database
    tweets = []
    tweetObjectArray = []
    with open('twitter_sentiment.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='"')
        for row in spamreader:
            tweets.append(row)

    tweetObjects = []
    for tweet in tweets:
        tweetObjects.append(json.dumps(
            Tweet(tweet[0], tweet[1], tweet[2], tweet[3]).__dict__))
        tweetObjectArray.append(Tweet(tweet[0], tweet[1], tweet[2], tweet[3]))

    tweetsObject = [{"tweet_id": t.tweet_id, "sentiment_score": t.sentiment_score,
                     "text": t.text, "user_screen_name": t.user_screen_name}
                    for t in tweetObjectArray]

    tweetJSON = json.dumps({"tweets": tweetsObject}, indent=3)


    # Lucky's solution
    session = boto3.Session(
    aws_access_key_id = os.environ.get('aws_access_key_id'),
    aws_secret_access_key = os.environ.get('aws_secret_access_key'),
    region_name="ap-southeast-2"
    )
    # Table Name
    table_name = 'twitter_sentiment'

    # dynamodb client
    dynamodb_client = session.client('dynamodb')

    if __name__ == "sentiment_analysis.views":
    # get item
        resp = dynamodb_client.scan(TableName = table_name)
        items = resp.get("Items")
        deserialisedItems = []
        for item in items:
            if item["is_spam"]['N'] == '0':
                deserialisedItems.append({k: [v2 for k2, v2 in v.items()][0] for k, v in item.items()})
        return HttpResponse(json.dumps(deserialisedItems[0:100]))

    return HttpResponse(tweetJSON)

def get_stocks(request):
    session = boto3.Session(
    aws_access_key_id = os.environ.get('aws_access_key_id'),
    aws_secret_access_key = os.environ.get('aws_secret_access_key'),
    region_name="ap-southeast-2"
    )
    # Table Name
    table_name = 'stock_price_ticker'

    # dynamodb client
    dynamodb_client = session.client('dynamodb')

    if __name__ == "sentiment_analysis.views":
    # get item
        resp = dynamodb_client.scan(TableName = table_name)
        items = resp.get("Items")
        deserialisedItems = []
        for item in items:
            deserialisedItems.append({k: [v2 for k2, v2 in v.items()][0] for k, v in item.items()})
        return HttpResponse(json.dumps(deserialisedItems))

# This is the old function that was initially for testing with dummy data
def get_stocks_old(request):
    # Testing with dummpy data
    stocks = []
    stockObjectArray = []
    with open('backend/django_app/stock_price_ticker.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='"')
        for row in spamreader:
            stocks.append(row)

    stockObjects = []
    for stock in stocks:
        stockObjects.append(json.dumps(
            Stock(stock[0], stock[1], stock[2], stock[3], stock[4], stock[5], stock[6], stock[7]).__dict__))
        stockObjectArray.append(Stock(
            stock[0], stock[1], stock[2], stock[3], stock[4], stock[5], stock[6], stock[7]))

    stocksObject = [{"price_id": s.price_id, "close": s.close,
                     "date": s.date, "high": s.high, "low": s.low,
                     "open": s.open, "ticker": s.ticker, "volume": s.volume}
                    for s in stockObjectArray]

    stockJSON = json.dumps({"stocks": stocksObject}, indent=3)
    return HttpResponse(stockJSON)


class Tweet:
    def __init__(self, tweet_id, sentiment_score, text, user_screen_name):
        self.tweet_id = tweet_id
        self.sentiment_score = sentiment_score
        self.text = text
        self.user_screen_name = user_screen_name


class Stock:
    def __init__(self, price_id, close, date, high, low, open, ticker, volume):
        self.price_id = price_id
        self.close = close
        self.date = date
        self.high = high
        self.low = low
        self.open = open
        self.ticker = ticker
        self.volume = volume
