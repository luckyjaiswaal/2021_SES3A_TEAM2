import { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import StockList from './components/stocklist/index';
import axios from './components/utils/axios'

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
      <div className="header">
        <h1> In-depth information for {stockSymbol}</h1>
        <h2>Stock info is currently blocked due to CORS policy, possible fix is to fetch from backend instead.</h2>
      </div>
    </>
  );
}
export default Indepth;
