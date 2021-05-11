import re
from datetime import datetime


def preprocess_tweet(data):
    text = data["text"]
    # Remove all the special characters
    processed_txt = re.sub(r'\W', ' ', text)
    # remove all single characters
    processed_txt = re.sub(r'\s+[a-zA-Z]\s+', ' ', processed_txt)
    # Remove single characters from the start
    processed_txt = re.sub(r'\^[a-zA-Z]\s+', ' ', processed_txt)
    # Substituting multiple spaces with single space
    processed_txt = re.sub(r'\s+', ' ', processed_txt, flags=re.I)
    # Removing prefixed 'b'
    processed_txt = re.sub(r'^b\s+', '', processed_txt)
    # Converting to Lowercase
    processed_txt = processed_txt.lower()
    return processed_txt


def check_account_age(data):
    """
    Checks the tweet's author's account age, if younger than 12 months, filter out
    """
    age_threshold = 31104000  # 60 * 60 * 24 * 30 * 12 seconds, 12 months
    account_creation_date = data['created_at']
    account_age = (datetime.now() - datetime.strptime(account_creation_date, '%Y-%m-%d %H:%M:%S')).total_seconds()
    if account_age < age_threshold:
        return True
    return False


def check_urls(data):
    """
    Checks for the presense of urls in the tweet's text
    """
    text = data["text"]
    text = re.sub('((www\.[^\s]+)|(https?://[^\s]+))', 'url_marked', text)
    text = re.sub(r'#([^\s]+)', r'\1', text)
    if 'url_marked' in text:
        return True
    return False


def check_hashtags(record):
    text = record["text"]
    text = re.sub(r'#([^\s]+)', r'hashtag_marked', text)
    hash_count = 0
    for word in text.split(" "):
        if "hashtag_marked" in word:
            hash_count += 1
        if hash_count > 5:
            return True
    return False


def twitter_spam_filter(data):
    spam_category = []

    age_check = check_account_age(data)
    if age_check:
        spam_category.append('account_age_threshold')

    url_check = check_urls(data)
    if url_check:
        spam_category.append('contains_url')

    hashtags_check = check_hashtags(data)
    if hashtags_check:
        spam_category.append('hashtags_threshold')

    if spam_category:
        return True, spam_category
    else:
        return False, spam_category


# data = {'created_at': '2020-05-01 00:00:00', 'text': 'www.test.com #test #fuck #this #what #ami #what'}
# print(check_account_age(data))
# print(check_urls(data))
# print(check_hashtags(data))

# print(twitter_spam_filter(data))
