import json
from tweepy.streaming import StreamListener
from tweepy import Stream
from tweepy import OAuthHandler


import twitter_config
from datetime import timezone
from kafka import KafkaProducer, KafkaConsumer, KafkaClient

# twitter API config
consumer_key = twitter_config.consumer_key
consumer_secret = twitter_config.consumer_secret
access_token = twitter_config.access_token
access_secret = twitter_config.access_secret


kafka_producer = KafkaProducer(value_serializer=lambda v: json.dumps(v).encode('utf-8'), bootstrap_servers=['localhost:9092'], api_version=(0, 1, 0))
kafka_topic = 'twitterdata'


def twitter_auth(consumer_key, consumer_secret, access_token, access_secret):
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_secret)
    # api = tweepy.API(auth, wait_on_rate_limit=True)
    return auth


class MyStreamListener(StreamListener):
    def on_status(self, status):
        try:
            pay_load = {
                "id": int(status.id),
                "created_at": int(status.created_at.replace(tzinfo=timezone.utc).timestamp()),
                "text": status.text or '',
                "user_screen_name": str(status.user.screen_name) or '',
                "user_followers_count": int(status.user.followers_count),
                "retweet_count": int(status.retweet_count),
                "favorite_count": int(status.favorite_count)
            }
            # print(f"Payload to be sent {pay_load}")
            # kafka_producer.send(kafka_topic, data_json["text"].encode('utf-8'))
            kafka_producer.send(kafka_topic, value=pay_load)
            print(f'produced tweet to {kafka_topic}: {pay_load} \n ')
            kafka_producer.flush()
        except AssertionError as e:
            print(f"{e} Error processing data {pay_load}")


# def create_stream(api):
#     myStreamListener = MyStreamListener()
#     myStream = Stream(auth=api.auth, listener=myStreamListener)
#     return myStream


def forgiving_json_deserializer(data):
    if data is None:
        print("No data")
        return None
    try:
        return json.loads(data.decode('utf-8'))
    except json.decoder.JSONDecodeError:
        print('Unable to decode: %s', data)
        return None


def main():
    print("Setting up twitter stream...")
    stream_listener = MyStreamListener()
    api = twitter_auth(consumer_key, consumer_secret, access_token, access_secret)
    myStream = Stream(auth=api, listener=stream_listener)
    print(f"Connected to Twitter api :{api}")

    trakcs = ['tsla', 'tesla']
    myStream.filter(track=trakcs)
    print(f"Created stream, listening for: {trakcs}")


if __name__ == "__main__":
    main()
