"""
Author: Yiming Gu 13047675
"""

import requests
import json
import pandas as pd
import boto3

# yahoo finance api config
api_endpoint = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data"
headers = {
    'x-rapidapi-key': "8e1291f4ffmsh02c96122a52a40ap142830jsn0415cec51648",
    'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
}


def get_stock_historical_prices(ticker):
    # use input ticker for GET query
    querystring = {"symbol": f"{ticker}", "region": "US"}

    # df to be returned
    df_prices = pd.DataFrame(columns=['date', 'ticker', 'open', 'high', 'low', 'close', 'volume'])

    # GET request to obtain data
    try:
        response = requests.request("GET", api_endpoint, headers=headers, params=querystring)
        dict_prices_raw = json.loads(response.text)['prices']
        df_prices_raw = pd.DataFrame(dict_prices_raw)[['date', 'open', 'high', 'low', 'close', 'volume']]
        df_prices_raw['ticker'] = ticker
    except:
        print("An exception occurred")
    df_prices = df_prices.append(df_prices_raw)
