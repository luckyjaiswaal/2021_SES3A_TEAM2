import boto3

dynamodb = boto3.resource('dynamodb')

# table = dynamodb.create_table(
#     TableName='twitter_data',
#     KeySchema=[
#         {
#             'AttributeName': 'tweet_id',
#             'KeyType': 'HASH'
#         }
#     ],
#     AttributeDefinitions=[
#         {
#             'AttributeName': 'tweet_id',
#             'AttributeType': 'N'
#         },
#     ],
#     ProvisionedThroughput={
#         'ReadCapacityUnits': 1,
#         'WriteCapacityUnits': 1
#     }
# )

# # table.meta.client.get_waiter('table_exists').wait(TableName='staff')
# print("Table status:", table.table_status)


table = dynamodb.create_table(
    TableName='twitter_sentiment',
    KeySchema=[
        {
            'AttributeName': 'tweet_id',
            'KeyType': 'HASH'
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'tweet_id',
            'AttributeType': 'N'
        },
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 1,
        'WriteCapacityUnits': 1
    }
)

# table.meta.client.get_waiter('table_exists').wait(TableName='staff')
print("Table status:", table.table_status)
