import './App.css';
import NavBar from '../src/components/navbar/index';
import StockList from '../src/components/stocklist/index';
import Newsfeed from '../src/components/newsfeed/index';
import axios from './components/utils/axios';
import {Grid} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Indepth from './InDepth';
function App() {
  return (
    <>
    <Router>
      <div className="header">
        <NavBar/>
          <Grid container direction="row">
            <Switch>
              <Route path="/" exact component={StockList} /> 
              <Route path="/stock/:stockSymbol" exact component={Indepth} /> 
              <Route path="/stock" exact>
              <h1>Please select a stock</h1>
              </Route> 
            </Switch> 
          <Newsfeed/>
        </Grid>
      </div>
      <button onClick={axiostest}>testaxios</button>
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
