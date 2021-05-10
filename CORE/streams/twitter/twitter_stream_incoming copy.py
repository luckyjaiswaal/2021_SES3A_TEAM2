import json
from datetime import timezone
import sys
from tweepy.streaming import StreamListener
from tweepy import Stream
from tweepy import OAuthHandler
from kafka import KafkaProducer, KafkaConsumer, KafkaClient
import twitter_config
from tweepy.api import API

# Get Twitter API creds from config.py
consumer_key = twitter_config.consumer_key
consumer_secret = twitter_config.consumer_secret
access_token = twitter_config.access_token
access_secret = twitter_config.access_secret


kafka_producer = KafkaProducer(
    value_serializer=lambda v: json.dumps(v).encode('utf-8'),
    bootstrap_servers=['localhost:9092'],
    api_version=(0, 1, 0)
)
kafka_topic = 'twitterdata'


def twitter_auth(consumer_key, consumer_secret, access_token, access_secret):
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_secret)
    # api = tweepy.API(auth, wait_on_rate_limit=True)
    return auth


class MyStreamListener(StreamListener):
    def __init__(self, api=None, kafka_producer=None, kafka_topic=None, tracks=None):
        super().__init__(api)
        self.api = api or API()

        self.kafka_producer = kafka_producer
        self.kafka_topic = kafka_topic
        self.tracks = tracks

    def on_status(self, status):
        print(f"{status} \n ")
        try:
            pay_load = {
                "tweet_id": int(status.id),
                "created_at": int(status.created_at.replace(tzinfo=timezone.utc).timestamp()),
                "text": status.text or '',
                "user_screen_name": str(status.user.screen_name) or '',
                "user_followers_count": int(status.user.followers_count)
                # "retweet_count": int(status.retweet_count),
                # "favorite_count": int(status.favorite_count)
            }
            # kafka_producer.send(kafka_topic, value=pay_load)
            # print(f'Produced tweet to {kafka_topic}: \n {pay_load} \n ')
            # kafka_producer.flush()
        except AssertionError as e:
            print(f"{e} - Error processing data {pay_load}")


def main():
    print("Setting up twitter stream...")
    tracks = ['tsla', 'tesla']
    stream_listener = MyStreamListener(kafka_producer, kafka_topic, tracks)
    auth = twitter_auth(consumer_key, consumer_secret, access_token, access_secret)
    myStream = Stream(auth=auth, listener=stream_listener)
    print(f"Connected to Twitter api :{auth}")

    myStream.filter(track=tracks)
    print(f"Created stream, listening for: {tracks}")


if __name__ == "__main__":
    main()
