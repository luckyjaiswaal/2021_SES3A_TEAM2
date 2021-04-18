import './App.css';
import NavBar from '../src/components/navbar/index';
import StockList from '../src/components/stocklist/index';

function App() {
  return (
    <>
      <div className="header">
        <NavBar/>
        <div className="content">
          <StockList/>
        </div>
      </div>
    </>
  );
}

export default App;
