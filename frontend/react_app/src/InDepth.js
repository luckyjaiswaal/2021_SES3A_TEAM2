import { useEffect, useState } from 'react';
import './App.css';
import './indepth.css'
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, requirePropFactory } from "@material-ui/core";
import Papa from 'papaparse';


function Indepth({ match }) {
  const [tweets, setTweets] = useState([]);
  const [timexaxis, settimexaxis] = React.useState([]);
  const [latestsemyaxis, setlatestsemyaxis] = React.useState([]);
  const [sharePrices, setSharePrices] = React.useState([]);
  const [sentimentScores, setSentimentScores] = React.useState([]);

  useEffect(() => {
    Papa.parse('http://localhost:3000/test.csv', {
      download: true,
      complete: data => {
        let arr1 = []
        let arr2 = []
        let arr3 = []
        for (let i = 1; i < data.data.length; i++) {
          arr1.push(data.data[i][0])
          arr2.push(data.data[i][3])
          arr3.push(data.data[i][5])
        }
        settimexaxis(arr1);
        setlatestsemyaxis(arr2);
      }
    });
    fetchTweets();
    fetchStockPrice();
    fetchSentiment();
    console.log(match);
  }, []);

  const stockSymbol = match.params.stockSymbol;

  const fetchTweets = async () => {
    const fetchItem = await fetch(
      `http://127.0.0.1:8000/api/sentiment_analysis/get_tweets/`
    );
    const tweets = await fetchItem.json();
    tweets.sort(function(a, b) {
      return b.created_at - a.created_at;
    });
    setTweets(tweets.slice(0, 25));
    console.log(tweets);
  }

  const fetchStockPrice = async () => {
    const fetchItem = await fetch(
      `http://127.0.0.1:8000/api/sentiment_analysis/get_stocks/`
    );
    const stockPrices = await fetchItem.json();
    var stockPriceData = []
    stockPrices.sort(function(a, b) {
      return a.date-b.date;
    });
    stockPrices.forEach(stockPrice => {
      stockPriceData.push({
        x: convertUnixTime(stockPrice.date),
        y: stockPrice.close
      })
    })
    setSharePrices(stockPriceData);
    console.log(stockPriceData);
  }

  const fetchSentiment = async () => {
    const fetchItem = await fetch(
      `http://127.0.0.1:8000/api/sentiment_analysis/get_sentiment/`
    );
    const data = await fetchItem.json();
    var sentimentScores = []
    data.sort(function(a, b) {
      return a.timestamp-b.timestamp;
    });
    data.forEach(sentimentData => {
      sentimentScores.push({
        x: convertUnixTime(sentimentData.timestamp),
        y: sentimentData.sentiment
      })
    })
    setSentimentScores(sentimentScores);
    console.log(sentimentScores);
  }

  const convertUnixTime = (timestamp) => {
    var d = new Date(timestamp*1000);
    var timeStampCon = d.getDate() + '-' + (d.getMonth()) + '-' + d.getFullYear();

    return timeStampCon;
  }

  const sentimentGraphdata = {
    labels: timexaxis,
    datasets: [
      {
        label: 'Sentiment Score',
        data: sentimentScores,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  const sharePricedata = {
    labels: timexaxis,
    datasets: [
      {
        label: 'TSLA price',
        data: sharePrices,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }

  const sharePriceGraphOptions = {
    scales: {
      y:
        {
          title: {
            display: true,
            text: 'Price (US dollars)'
          },
          ticks: {
            beginAtZero: true,
          },
        },
    },
  };

  const sentimentScoreGraphOptions = {
    scales: {
      y:
        {
          title: {
            display: true,
            text: 'Sentiment Score'
          },
          ticks: {
            beginAtZero: true,
          },
        },
    },
  };

  return (
    <>
      <div className="indepth">
        <div className="top">
          <div className="searchArea">
            <input type="search" placeholder="Search For Stock" />
          </div>
          <div className="dashboard-btn">
            <Link to="/stocklist">
              <button className="btn">

                Dashboard</button>
            </Link>

          </div>
        </div>
        <h1>In depth anaylsis of {stockSymbol}</h1>
        <div className="section">
          <div className="time">
            <h2>Latest Related Tweets</h2>
            <TableContainer component={Paper} className="tablecontainer" style={{ width: 750 }}>
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: '#363538' }}>
                    <TableCell style={{ color: '#F6F6F6' }}>Sentiment Score</TableCell>
                    <TableCell style={{ color: '#F6F6F6' }}>Text</TableCell>
                    <TableCell style={{ color: '#F6F6F6' }}>User Screen Name</TableCell>
                    <TableCell style={{ color: '#F6F6F6' }}>Date Posted</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tweets.map((tweet) => (
                    <TableRow key={tweet.tweet_id}>
                      <TableCell component="th" scope="row">
                        {tweet.sentiment_score}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {tweet.text}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {tweet.user_screen_name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {convertUnixTime(tweet.created_at)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="chart">
            <div className="sentiment">
              <h3>Sentiment Score Chart</h3>
              <Line data={sentimentGraphdata} options={sentimentScoreGraphOptions} />
            </div>
            <div className="pie">
              <h3>Share Price Chart</h3>
              <Line data={sharePricedata} options={sharePriceGraphOptions} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="header">
        <h1> In-depth information for {stockSymbol}</h1>
        <h2>Stock info is currently blocked due to CORS policy, possible fix is to fetch from backend instead.</h2>
      </div> */}
    </>
  );
}
export default Indepth;
