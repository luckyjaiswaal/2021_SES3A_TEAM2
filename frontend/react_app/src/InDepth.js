import { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import StockList from './components/stocklist/index';
import axios from './components/utils/axios'
import './indepth.css'

function Indepth({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const stockSymbol = match.params.stockSymbol;

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://query1.finance.yahoo.com/v7/finance/chart/${stockSymbol}` //cors blocked it, fetch from our backend instead
    );
    const item = await fetchItem.json();
    console.log(item);
  }

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
                        <h3>Sentiment Chart</h3>
                    </div>
                    <div className="pie">
<h3>Pie Chart</h3>
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
