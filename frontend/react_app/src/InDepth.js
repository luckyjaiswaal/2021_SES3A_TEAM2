import { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import StockList from './components/stocklist/index';
import axios from './components/utils/axios'
import './indepth.css'
import React from 'react';
import { Line } from 'react-chartjs-2';

function Indepth({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const stockSymbol = match.params.stockSymbol;

  const fetchItem = async () => {
    fetch(`http://127.0.0.1:8000/api/sentiment_analysis/get_tweets/`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    })
      .then((response) => response.json())
      .then((messages) => { console.log(messages); });
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
            <button className="btn">Dashboard</button>
          </div>
        </div>
        <div className="section">
          <div className="time">

            <h3>Search Bar stock to be displayed in the bar.</h3> {fetchItem}
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
