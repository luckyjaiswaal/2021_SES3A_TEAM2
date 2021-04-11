from tweepy import StreamListener
from tweepy import Stream
import twitter_api_client
import config
from datetime import timezone
from kafka import KafkaProducer


# twitter API config
consumer_key = config.consumer_key
consumer_secret = config.consumer_secret
access_token = config.access_token
access_secret = config.access_secret


class MyStreamListener(StreamListener):
    def __init__(self, kafka_producer, target_topic, stream_type):
        super().__init__()
        self.kafka_producer = kafka_producer
        self.target_topic = target_topic
        self.stream_type = stream_type

    def on_status(self, status):
        if self.stream_type == 'company':
            try:
                data = {"id": int(status.id),
                        # "created_at": long(status.created_at.replace(tzinfo=timezone.utc).timestamp()),
                        "text": status.text or '',
                        "user_screen_name": str(status.user.screen_name) or '',
                        "followers_count": int(status.user.followers_count),
                        "retweet_count": int(status.retweet_count),
                        "favorite_count": int(status.favorite_count)}
                # print(f"Payload to be sent {data}")
                self.kafka_producer.send(self.target_topic, value=data)
                print(f'produced tweet to {self.target_topic}: ', data)
                # self.kafka_producer.flush()
            except AssertionError as e:
                print(f"{e} Error processing {data}")


def create_stream(api, stream_type, kafka_producer, target_topic, tracks):
    myStreamListener = MyStreamListener(kafka_producer, target_topic, stream_type)
    myStream = Stream(auth=api.auth, listener=myStreamListener)
    myStream.filter(track=tracks)


def main():
    print("Starting stream")
    api = twitter_api_client.generate_api_obj(consumer_key, consumer_secret, access_token, access_secret)
    kafka_producer = KafkaProducer(bootstrap_servers='localhost:9092')
    print(f"Connected to Twitter api :{api}")
    target_topic = "twitter_raw"
    stream_type = 'company'
    create_stream(api, stream_type, kafka_producer, target_topic, ['tsla', 'tesla'])


if __name__ == "__main__":
    main()
