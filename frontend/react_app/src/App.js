import './App.css';
import NavBar from '../src/components/navbar/index';
import StockList from '../src/components/stocklist/index';
import Newsfeed from '../src/components/newsfeed/index';
import axios from './components/utils/axios';
import {Grid} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Indepth from './InDepth';
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Watchlist from './Watchlist'
// import Indepth from './InDepth'

function App() {
  return (
    <>
    <Grid container direction="row">
      <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Login} /> 
            <Route path="/stocklist" exact component={StockList} /> 
            <Route path="/signup" exact component={SignUp} /> 
            <Route path="/watchlist" exact component={Watchlist} /> 
            <Route path="/dashboard" exact component={Dashboard} /> 
            <Route path="/indepth" exact component={Indepth} /> 
            <Route path="/stock/:stockSymbol" exact component={Indepth} /> 
            <Route path="/stock" exact>
            <h1>Please select a stock</h1>
            </Route> 
          </Switch>
          {/* <Newsfeed/> */}
      </Router>
    </Grid>
    <button onClick={axiostest}>testaxios</button>
    </>
  );
}

function axiostest(){
  axios.get('/api/getjson').then((res)=>{
    console.log(res)
  })
}
export default App;
