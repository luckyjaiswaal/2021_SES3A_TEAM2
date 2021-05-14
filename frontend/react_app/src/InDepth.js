import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import StockList from './components/stocklist/index';
import axios from './components/utils/axios'
import './indepth.css'
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, requirePropFactory} from "@material-ui/core";
import Papa from 'papaparse';


function Indepth({ match }) {
  const [tweets, setTweets] = useState([]);
  const [timexaxis, settimexaxis] = React.useState([]);
  const [latestsemyaxis, setlatestsemyaxis] = React.useState([]);
  const [stockprice,setstockprice] = React.useState([]);
  useEffect(() => {
    Papa.parse('http://localhost:3000/test.csv', {
      download: true,
      complete: data => {
          let arr1=[]
          let arr2=[]
          let arr3=[]
          for(let i=1;i<data.data.length;i++){
            arr1.push(data.data[i][0])
            arr2.push(data.data[i][3])
            arr3.push(data.data[i][5])
          }
          settimexaxis(arr1);
          setlatestsemyaxis(arr2);
          setstockprice(arr3);
      }
  });
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
      setTweets(item);
      console.log(tweets);
    }

  const data = {
    labels: timexaxis,
    datasets: [
      {
        label: 'Sample data, fill with real data from API',
        data: stockprice,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  const seconddata= {
    labels: timexaxis,
    datasets: [
      {
        label: 'Sample data, fill with real data from API',
        data: latestsemyaxis,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }

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
          <h1>In depth anaylsis of {stockSymbol}</h1>
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
              <Line data={seconddata} options={options} />
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
