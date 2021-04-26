

from kafka import KafkaConsumer
from datetime import timezone
import json
import sys
sys.path.insert(
    1, '/Users/yiming.gu/Desktop/Personal/U/3A fml/2021_SES3A_TEAM2/CORE')
from nlp import tweets_processor, nlp_twitter

kafka_topic = 'twitterdata'


def forgiving_json_deserializer(data):
    if data is None:
        # print("No data")
        return None
    try:
        return json.loads(data.decode('utf-8'))
    except json.decoder.JSONDecodeError:
        # print('Unable to decode: %s', data)
        return None


def main():
    kafka_consumer = KafkaConsumer(
        kafka_topic,
        bootstrap_servers=['localhost:9092'],
        auto_offset_reset='earliest',
        value_deserializer=forgiving_json_deserializer)
    # enable_auto_commit=True,
    # auto_commit_interval_ms=5000,
    # fetch_max_bytes=128,
    # max_poll_records=100,

    for message in kafka_consumer:
        if message.value is not None:
            tweet = json.loads(json.dumps(message.value))
            processed_tweet = tweets_processor.preprocess_tweet(tweet)

            sent_score_vader = nlp_twitter.calculate_sentiment_vader(processed_tweet)
            sent_score_txtblob = nlp_twitter.calculate_sentiment_textblob(processed_tweet)
            print(f"Raw message: {message.value['text']} \nPreprocessed: {processed_tweet} \nVader:{sent_score_vader} \nTextblob:{sent_score_txtblob} \n\n\n")


if __name__ == "__main__":
    main()
