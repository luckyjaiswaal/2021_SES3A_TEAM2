import './App.css';
import NavBar from '../src/components/navbar/index';
import StockList from '../src/components/stocklist/index';
import axios from './components/utils/axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Indepth from './InDepth';
import Login from './Login'
import SignUp from './SignUp'
function App() {
  return (
    <>
    <Router>
      <div className="header">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={StockList} /> 
          <Route path="/login" exact component={Login} /> 
          <Route path="/signup" exact component={SignUp} /> 
          <Route path="/stock/:stockSymbol" exact component={Indepth} /> 
          <Route path="/stock" exact>
          <h1>Please select a stock</h1>
          </Route> 
        </Switch>
        <button onClick={axiostest}>testaxios</button>
      </div>
    </Router>
    </>
  );
}

function axiostest(){
  axios.get('/api/getjson').then((res)=>{
    console.log(res)
  })
}
export default App;
