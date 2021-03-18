import tweepy
import api_client
import config

consumer_key = config.consumer_key
consumer_secret = config.consumer_secret
access_token = config.access_token
access_secret = config.access_secret


class MyStreamListener(tweepy.StreamListener):
    def on_status(self, status):
        print(status)
        print(status.user.screen_name + ":" + status.text)


def create_stream(api):
    myStreamListener = MyStreamListener()
    myStream = tweepy.Stream(auth=api.auth, listener=myStreamListener)
    myStream.filter(track=['tesla'])


api = api_client.generate_api_obj(
    consumer_key, consumer_secret, access_token, access_secret)


create_stream(api)
