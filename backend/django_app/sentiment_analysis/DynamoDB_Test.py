import boto3 # To interact with AWS using python

# Table Name
table_name = 'Tweet_sentiment'

# dynamodb client
dynamodb_client = boto3.client('dynamodb')

# tweet item
tweet  = {
    'tweet_id': {'S': '2'},
    'tweet_author': {'S': "kevin"},
    'tweet_sentiment':{'S': 'Neutral'}
}

 # get item

item_get ={
    'tweet_id': {'S':'1'}
}

if __name__ == "__main__":

    # put item into db
    resp = dynamodb_client.put_item(TableName = table_name, Item= tweet)
    print(resp)

    # get item
    resp = dynamodb_client.get_item(TableName = table_name, Key = item_get)
    print(resp)
    print(resp['Item'])
    print(resp['Item']['tweet_author']['S'])
