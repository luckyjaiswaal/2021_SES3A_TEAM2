from pyflink.table import EnvironmentSettings, StreamTableEnvironment

# 1. create a TableEnvironment
env_settings = EnvironmentSettings.new_instance(
).in_streaming_mode().use_blink_planner().build()
table_env = StreamTableEnvironment.create(environment_settings=env_settings)

# 2. create source Table
table_env.execute_sql("""
    CREATE TABLE tweets(
        id INT,
        text STRING
        user_screen_name STRING
        followers_count INT
        retweet_count INT
        favorite_count INT
    ) WITH (
        'connector' = 'kafka',
         'topic' = 'tweets_data',
        'properties.bootstrap.servers' = 'localhost:2181',
    )
""")


# 3. create sink Table
table_env.execute_sql("""
    CREATE TABLE print (
        id INT,
        text STRING
        user_screen_name STRING
        followers_count INT
        retweet_count INT
        favorite_count INT
    ) WITH (
        'connector' = 'print'
    )
""")
