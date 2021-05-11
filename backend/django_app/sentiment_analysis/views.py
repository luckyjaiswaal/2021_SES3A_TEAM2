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

#Libraries to help access DB
import csv

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
        tweetObjects.append(json.dumps(Tweet(tweet[0],tweet[1],tweet[2],tweet[3]).__dict__))
        tweetObjectArray.append(Tweet(tweet[0],tweet[1],tweet[2],tweet[3]))

    tweetsObject = [{"tweet_id": t.tweet_id, "sentiment_score": t.sentiment_score,
                 "text": t.text, "user_screen_name": t.user_screen_name}
                for t in tweetObjectArray]

    tweetJSON = json.dumps({"tweets": tweetsObject}, indent=3)
    return HttpResponse(tweetJSON)

class Tweet:
  def __init__(self, tweet_id, sentiment_score, text, user_screen_name):
    self.tweet_id = tweet_id
    self.sentiment_score = sentiment_score
    self.text = text
    self.user_screen_name = user_screen_name