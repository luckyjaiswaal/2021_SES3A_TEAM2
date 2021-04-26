import numpy as np
import pandas as pd
import re
import nltk
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from textblob import TextBlob


def calculate_sentiment_vader(text):
    analyser = SentimentIntensityAnalyzer()
    return (analyser.polarity_scores(text))


def calculate_sentiment_textblob(text):
    return TextBlob(text).sentiment.polarity


# calculate_sentiment(["Tesla is a very bad stock", "Tesla is thinking about our future", "Tesla is very coool", "tesla is great!"])
