import json
from time import sleep

from kafka import KafkaConsumer, KafkaProducer

#in progress
#def fetch_stream(streamdata):
#    twitterstream = None
#    print('Processing..{}'.format(streamdata))
#    try:
#        if streamdata != null:
#            return twitterstream
#    except Exception as ex:
#        print('Exception while accessing stream data')
#        print(str(ex))
#    finally:
#        return twitterstream


def publish_message(producer_instance, topic_name, key, value):
    try:
        key_bytes = bytes(key, encoding='utf-8')
        value_bytes = bytes(value, encoding='utf-8')
        producer_instance.send(topic_name, key=key_bytes, value=value_bytes)
        producer_instance.flush()
        print('Message published successfully.')
    except Exception as ex:
        print('Exception in publishing message')
        print(str(ex))


def connect_kafka_producer():
    _producer = None
    try:
        _producer = KafkaProducer(bootstrap_servers=['localhost:9092'], api_version=(0, 10))
    except Exception as ex:
        print('Exception while connecting Kafka')
        print(str(ex))
    finally:
        return _producer


def parse(markup):
    title = '-'
    tweet_date = '-'
    content = '-'
    like_count = 0

    try:

        # username
        username_section = 
        # tweet date
        date_section = 
        # content
        content_section = 
        #like count
        like_section = 

        if content_section:
            content = content_section[0].text

        if date_section:
            date = date_section[0].text

        if username_section:
            username = username_section[0].text

        rec = {'username': username, 'date': date, 'content': content}

    except Exception as ex:
        print('Exception while parsing')
        print(str(ex))
    finally:
        return json.dumps(rec)


if __name__ == '__main__':
    print('Running Consumer..')
    parsed_records = []
    topic_name = 'twitter_stream'
    parsed_topic_name = 'parsed_twitter_stream'

    consumer = KafkaConsumer(topic_name, auto_offset_reset='earliest',
                             bootstrap_servers=['localhost:9092'], api_version=(0, 10), consumer_timeout_ms=1000)
    for msg in consumer:
        streamdata = msg.value
        result = parse(streamdata)
        parsed_records.append(result)
    consumer.close()
    sleep(5)

    if len(parsed_records) > 0:
        print('Publishing records..')
        producer = connect_kafka_producer()
        for rec in parsed_records:
            publish_message(producer, parsed_topic_name, 'parsed', rec)


