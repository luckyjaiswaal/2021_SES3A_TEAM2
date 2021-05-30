"""
Author: Yiming Gu 13047675
"""

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


def calculate_sentiment_vader(text):
    analyser = SentimentIntensityAnalyzer()
    return (analyser.polarity_scores(text))


# print(calculate_sentiment_vader(["Tesla is a very bad stock",
#                                  "Tesla is thinking about our future", "Tesla is very coool", "tesla is great!"]))
