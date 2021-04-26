import './App.css';
import NavBar from '../src/components/navbar/index';
import StockList from '../src/components/stocklist/index';
import axios from './components/utils/axios'
import StockPrice from '../src/components/stocklist/StockPrice';
import SentimentValue from '../src/components/stocklist/SentimentValue';

function App() {
  return (
    <>
      <div className="header">
        <NavBar/>
        <div className="content">
          <StockList/>
        </div>
        <button onClick={axiostest}>testaxios</button>
        <div>
          <StockPrice/>
        </div>
        <div>
          <SentimentValue/>
        </div>
      </div>
    </>
  );
}

function axiostest(){
  axios.get('/api/getjson').then((res)=>{
    console.log(res)
  })
}
export default App;
