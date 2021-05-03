import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import priceData from './assets/btcdata.json'
import moment from 'moment'

export default class StockPrice extends Component {
  render() {
    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);
    const configPrice = {
      
      yAxis: [{
        offset: 20,

        labels: {
          formatter: function () {
            return numberFormat.format(this.value) 
          }
          ,
          x: -15,
          style: {
            "color": "#000", "position": "absolute"

          },
          align: 'left'
        },
      },
        
      ],
      tooltip: {
        shared: true,
        formatter: function () {

          var unirest = require("unirest");

          var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes"); //the 'get-quotes' can change depending upon the data you want to receive

          req.query({
            "region": "US",
            "symbols": "TSLA" //change this to the selected stock by symbol
          });

          req.headers({
            "x-rapidapi-key": "8e1291f4ffmsh02c96122a52a40ap142830jsn0415cec51648",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "useQueryString": true
          });


          req.end(function (res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body); //still need to figure out how to extract the data I need and put it in the format which fits the table
          });

          return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
        }
      },
      plotOptions: {
        series: {
          showInNavigator: true,
          gapSize: 6,

        }
      },
      rangeSelector: {
        selected: 1
      },
      title: {
        text: `Bitcoin stock price`
      },
      chart: {
        height: 600,
      },
  
      credits: {
        enabled: false
      },
  
      legend: {
        enabled: true
      },
      xAxis: {
        type: 'date',
      },
      rangeSelector: {
        buttons: [{
          type: 'day',
          count: 1,
          text: '1d',
        }, {
          type: 'day',
          count: 7,
          text: '7d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'month',
          count: 3,
          text: '3m'
        },
          {
          type: 'all',
          text: 'All'
        }],
        selected: 4
      },
      series: [{
        name: 'Price',
        type: 'spline',
  
        data: priceData,
        tooltip: {
          valueDecimals: 2
        },
  
      }
      ]
    };
    return (
      <div>
         <ReactHighcharts config = {configPrice}></ReactHighcharts>
      </div>
    )
  }
}
