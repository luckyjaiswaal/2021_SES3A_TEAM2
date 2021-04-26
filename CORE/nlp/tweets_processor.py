import re


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
