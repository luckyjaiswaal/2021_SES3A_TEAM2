import './App.css';
import NavBar from '../src/components/navbar/index';
import StockList from '../src/components/stocklist/index';
import Newsfeed from '../src/components/newsfeed/index';
import axios from './components/utils/axios';
import {Grid} from "@material-ui/core";

function App() {
  return (
    <>
      <div className="header">
        <NavBar/>
        <Grid direction="row">
        <div className="content">
          <StockList/>
          <Newsfeed/>
        </div>
        </Grid>
        <button onClick={axiostest}>testaxios</button>
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
