import json
from tweepy.streaming import StreamListener
from tweepy import Stream
from tweepy import OAuthHandler


import config
from datetime import timezone
from kafka import KafkaProducer, KafkaConsumer, KafkaClient

# twitter API config
consumer_key = config.consumer_key
consumer_secret = config.consumer_secret
access_token = config.access_token
access_secret = config.access_secret


kafka_producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'], api_version=(0, 1, 0)
)
kafka_topic = 'twitterdata'


class MyStreamListener(StreamListener):
    def on_data(self, data):
        try:
            data_json = json.loads(data)
            # data = {"id": int(status.id),
            #         # "created_at": long(status.created_at.replace(tzinfo=timezone.utc).timestamp()),
            #         "text": status.text or '',
            #         "user_screen_name": str(status.user.screen_name) or '',
            #         "followers_count": int(status.user.followers_count),
            #         "retweet_count": int(status.retweet_count),
            #         "favorite_count": int(status.favorite_count)}
            # print(f"Payload to be sent {data}")
            kafka_producer.send(kafka_topic, data_json["text"].encode('utf-8'))
            # kafka_producer.send(kafka_topic, value=data)
            print(f'produced tweet to {kafka_topic}: ', data_json)
            # self.kafka_producer.flush()
        except AssertionError as e:
            print(f"{e} Error processing {data_json}")


def twitter_auth(consumer_key, consumer_secret, access_token, access_secret):
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_secret)
    # api = tweepy.API(auth, wait_on_rate_limit=True)
    return auth


# def create_stream(api):
#     myStreamListener = MyStreamListener()
#     myStream = Stream(auth=api.auth, listener=myStreamListener)
#     return myStream


def main():
    # print("Starting stream")
    # listener = MyStreamListener()
    # api = twitter_auth(consumer_key, consumer_secret, access_token, access_secret)
    # myStream = Stream(auth=api, listener=listener)

    # print(f"Connected to Twitter api :{api}")

    # trakcs = ['tsla', 'tesla']
    # myStream.filter(track=trakcs)
    # print(f"Created stream, listening for:{trakcs}")

    consumer = KafkaConsumer(
        kafka_topic,
        bootstrap_servers=['localhost:9092'],
        auto_offset_reset='latest',
        enable_auto_commit=True,
        auto_commit_interval_ms=5000,
        fetch_max_bytes=128,
        max_poll_records=100,
        value_deserializer=lambda x: json.loads(x.decode('utf-8'))
    )
    for message in consumer:
        tweets = json.loads(json.dumps(message.value))
        print(tweets)


if __name__ == "__main__":
    main()
