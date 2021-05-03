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
import Watchlist from './Watchlist'
import Profile from './Profile'

function App() {
  return (
    <>
    <Grid container direction="row">
      <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={StockList} /> 
            <Route path="/login" exact component={Login} /> 
            <Route path="/signup" exact component={SignUp} /> 
            <Route path="/watchlist" exact component={Watchlist} /> 
            <Route path="/profile" exact component={Profile} /> 
            <Route path="/stock/:stockSymbol" exact component={Indepth} /> 
            <Route path="/stock" exact>
            <h1>Please select a stock</h1>
            </Route> 
          </Switch>
          {/* <Newsfeed/> */}
      </Router>
    </Grid>
    </>
  );
}


export default App;
