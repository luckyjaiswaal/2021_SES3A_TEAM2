import tweepy
import twitter_api_client
import config
from datetime import timezone
from kafka import KafkaProducer

# twitter API config
consumer_key = config.consumer_key
consumer_secret = config.consumer_secret
access_token = config.access_token
access_secret = config.access_secret


class CompanyStreamListener(tweepy.StreamListener):
    def __init__(self, kafka_producer, target_topic):
        self.kafka_producer = kafka_producer
        self.target_topic = target_topic

    def on_status(self, status):
        data = {"id": int(status.id),
                # "created_at": long(status.created_at.replace(tzinfo=timezone.utc).timestamp()),
                "text": status.text or '',
                "user_screen_name": str(status.user.screen_name) or '',
                "followers_count": int(status.user.followers_count),
                "retweet_count": int(status.retweet_count),
                "favorite_count": int(status.favorite_count)}

        self.kafka_producer.send('tweets-data', value=data)
        print('produced tweet: ', data)
        # self.kafka_producer.flush()


def create_stream(api, kafka_producer, target_topic):
    companyStreamListener = CompanyStreamListener(kafka_producer, target_topic)
    myStream = tweepy.Stream(auth=api.auth, listener=companyStreamListener)
    myStream.filter(track=['tesla'])


def main():
    api = twitter_api_client.generate_api_obj(
        consumer_key, consumer_secret, access_token, access_secret)
    kafka_producer = KafkaProducer(bootstrap_servers='localhost:2181')
    target_topic = ""
    create_stream(api, kafka_producer, target_topic)


if __name__ == "__main__":
    main()
