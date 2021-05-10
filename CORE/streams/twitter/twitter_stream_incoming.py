import json
from datetime import timezone
from tweepy.streaming import StreamListener
from tweepy import Stream
from tweepy import OAuthHandler
from kafka import KafkaProducer, KafkaConsumer, KafkaClient
import twitter_config


# Get Twitter API creds from config.py
consumer_key = twitter_config.consumer_key
consumer_secret = twitter_config.consumer_secret
access_token = twitter_config.access_token
access_secret = twitter_config.access_secret


kafka_producer = KafkaProducer(
    value_serializer=lambda v: json.dumps(v).encode('utf-8'),
    bootstrap_servers=['localhost:9092'],
    api_version=(0, 1, 0),
    max_request_size=3173440261
)
kafka_topic = 'twitterdata'


def twitter_auth(consumer_key, consumer_secret, access_token, access_secret):
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_secret)
    # api = tweepy.API(auth, wait_on_rate_limit=True)
    return auth


class MyStreamListener(StreamListener):
    def on_status(self, status):
        if hasattr(status, "retweeted_status"):
            try:
                text = status.retweeted_status.extended_tweet["full_text"]
            except AttributeError:
                text = status.retweeted_status.text
        else:
            try:
                text = status.extended_tweet["full_text"]
            except AttributeError:
                text = status.text

        pay_load = {
            "tweet_id": status.id,
            "created_at": int(status.created_at.replace(tzinfo=timezone.utc).timestamp()),
            "text": text or '',
            "user_screen_name": str(status.user.screen_name) or '',
            "user_followers_count": int(status.user.followers_count),
            "retweet_count": int(status.retweet_count),
            "favorite_count": int(status.favorite_count)
        }

        try:
            kafka_producer.send(kafka_topic, value=pay_load)
            print(f'Produced tweet to {kafka_topic}: \n {pay_load} \n ')
            kafka_producer.flush()
        except AssertionError as e:
            print(f"{e} - Error processing data {pay_load}")


def main():
    print("Setting up twitter stream...")
    stream_listener = MyStreamListener()
    auth = twitter_auth(consumer_key, consumer_secret, access_token, access_secret)
    myStream = Stream(auth=auth, listener=stream_listener)
    print(f"Connected to Twitter api :{auth}")

    trakcs = ['tsla', 'tesla', '#tsla', '#tesla']
    myStream.filter(track=trakcs)
    print(f"Created stream, listening for: {trakcs}")


if __name__ == "__main__":
    main()
