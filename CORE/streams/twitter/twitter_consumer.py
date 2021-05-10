

from kafka import KafkaConsumer
from datetime import timezone
import json
import sys
import boto3
from decimal import Decimal
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
    # set up a kafka consumer to poll tweets from kafka topic
    kafka_consumer = KafkaConsumer(
        kafka_topic,
        bootstrap_servers=['localhost:9092'],
        auto_offset_reset='earliest',
        value_deserializer=forgiving_json_deserializer)
    # enable_auto_commit=True,
    # auto_commit_interval_ms=5000,
    # fetch_max_bytes=128,
    # max_poll_records=100,

    # set up a dynamodb client
    dynamodb = boto3.resource('dynamodb')
    table_raw = dynamodb.Table('twitter_data')
    table_sent = dynamodb.Table('twitter_sentiment')

    print("Start tweets polling")
    # poll and process messages
    for message in kafka_consumer:
        if message.value is not None:
            # switch out old key if exists
            if 'id' in message.value:
                message.value['tweet_id'] = message.value.pop('id')

            # send raw tweet to dynamodb first
            table_raw.put_item(Item=message.value)
            print(f"Sent raw data to dynamodb {message.value}")

            # preprocess tweet for nlp
            tweet = json.loads(json.dumps(message.value))
            processed_tweet = tweets_processor.preprocess_tweet(tweet)

            # calculate sentiment score
            sent_score_vader_dict = nlp_twitter.calculate_sentiment_vader(
                processed_tweet)
            # sent_score_txtblob = nlp_twitter.calculate_sentiment_textblob(
            #     processed_tweet)
            sent_score_vader = sent_score_vader_dict['compound']
            # sent_score_vader_str = max(sent_score_vader, key=sent_score_vader.get)
            # sent_score_vader_int = 0
            # if sent_score_vader == "pos":
            #     sent_score_vader_int = 1
            # elif sent_score_vader == "neu":
            #     sent_score_vader_int = 0
            # elif sent_score_vader == "neg":
            #     sent_score_vader_int = -1

            paylod = {
                "tweet_id": message.value['tweet_id'],
                "user_screen_name": message.value['user_screen_name'],
                "text": message.value['text'],
                "sentiment_score": json.loads(json.dumps(sent_score_vader), parse_float=Decimal)
                # "sentiment_score_num": sent_score_vader_int
            }
            table_sent.put_item(Item=paylod)
            print(f"Sent sentiment score data to dynamodb {paylod}")

            # print(
            #     f"Raw message: {message.value['text']} \nPreprocessed: {processed_tweet} \nVader:{sent_score_vader} \nTextblob:{sent_score_txtblob} \n\n\n")


if __name__ == "__main__":
    main()
