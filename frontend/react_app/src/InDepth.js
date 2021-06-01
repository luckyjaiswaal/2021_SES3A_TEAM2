import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import StockList from './components/stocklist/index';
import axios from './components/utils/axios'
import './indepth.css'
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField} from "@material-ui/core";

function Indepth({ match }) {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const stockSymbol = match.params.stockSymbol;
  
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://127.0.0.1:8000/api/sentiment_analysis/get_tweets/`
      );
      const item = await fetchItem.json();
      console.log(item);
      setTweets(item.tweets);
      console.log(tweets);
    }
  

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Sample data, fill with real data from API',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
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
          <h1>In depth anaylsis of hello {stockSymbol}</h1>
        <div className="section">
          <div className="time">
            <TableContainer component={Paper} className="tablecontainer" style={{width:600}}>
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow style={{backgroundColor:'#363538'}}>
                    <TableCell style={{color: '#F6F6F6'}}>Sentiment Score</TableCell>
                    <TableCell style={{color: '#F6F6F6'}}>Text</TableCell>
                    <TableCell style={{color: '#F6F6F6'}}>User Screen Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tweets.slice(1, tweets.length).map((tweet) => (
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="chart">
            <div className="sentiment">
              <h3>Sentiment Score Chart</h3>
              <Line data={data} options={options} />
            </div>
            <div className="pie">
              <h3>Share Price Chart</h3>
              <Line data={data} options={options} />
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

function StockPrice(){
  const [price, setPrice] = useState(null);
  useEffect(() => {
    fetchData();
    
  }, []);
  


  const apiURL = "http://api.marketstack.com/v1/tickers/AAPL";
    const access_key = "df4103ee51e5b563f92cf1b29a79050c";
    

    const fetchData = async() => {
      const response = await axios.get(apiURL)
      setPrice(response.data)
    }

  return(
    <div className="StockPrice">
      <h1>Price of TSLA:</h1>
      FetchData
      <div className="price">
    </div>

    </div>

  )
}

