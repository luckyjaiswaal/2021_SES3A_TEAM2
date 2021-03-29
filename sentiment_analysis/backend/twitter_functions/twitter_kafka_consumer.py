import json
from time import sleep

from kafka import KafkaConsumer

if __name__ == '__main__':
    parsed_topic_name = 'parsed_twitter_stream'

    consumer = KafkaConsumer(parsed_topic_name, auto_offset_reset='earliest',
                             bootstrap_servers=['localhost:9092'], api_version=(0, 10), consumer_timeout_ms=1000)
    for msg in consumer:
        record = json.loads(msg.value)
        hashtag = str(record['content']) #strip content to find hashtags
        username = record['username'] #link username to hashtag to look for repeat posts (ramping/downramping)

        sleep(3)

    if consumer is not None:
        consumer.close()