import './form.css';
import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField} from "@material-ui/core";
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { Link, Redirect } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from './components/utils/axios';

// const handleChange = (event) => {
//   setState({ ...state, [event.target.name]: event.target.checked });
// };

function createData(stock, symbol, price, score, week) {
  return {stock, symbol, price, score, week};
}

const rows = [
  createData('Tesla', '$420 ↑ 50 5', '69/100', '640/230', '700/205'),
  createData('Google', '$330 ↓ 30 10', '40/100', '640/230','700/205'),
  createData('Amazon', '$563 ↑ 40 10', '55/100', '640/230', '700/205'),
  createData('Facebook', '$450 ↑ 10 10', '77/100', '640/230','700/205'),
];

async function axiostest(){
  axios.get('/api/getjson').then((res)=>{
    console.log(res)
  })
}

// const priceStyle = {color : setColorStyle(price)};
// const sentimentStyle = {color : setColorStyle(score)};

function setColorStyle(text) {
  if (text.includes("↑")) {
    return 'green'
  } else if (text.includes("↓")) {
    return 'red';
  } else {
    return 'grey';
  }
}

export class Watchlist extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      price: '' ,
      sms: false ,
      email: false , 
    };
  }
  
  render() {
    console.log(this.state)
    // const priceStyle = null

    return (
      <>
        <TableContainer component={Paper} className="tablecontainer" style={{width:1200}}>
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow style={{backgroundColor:'#363538'}}>
                    <TableCell style={{color: '#F6F6F6'}}>Company</TableCell>
                    <TableCell style={{color: '#F6F6F6'}}>Current Price Change %</TableCell>
                    <TableCell style={{color: '#F6F6F6'}}>Sentiment Score</TableCell>
                    <TableCell style={{color: '#F6F6F6'}}>Intraday High / Low</TableCell>
                    <TableCell style={{color: '#F6F6F6'}}>52 Week High / Low</TableCell> 
                    <TableCell style={{color: '#F6F6F6'}}>Set Buy Alert</TableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    // {priceStyle = {color : setColorStyle(row.symbol) }},
                    <TableRow key={row.stock}>
                      <TableCell component="th" scope="row">
                        {row.stock}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.symbol}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.price}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.score}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.week}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField 
                        id="outlined-basic" 
                        label="Set Price" 
                        variant="outlined" 
                        value={this.setState.price}
                        />
                        <br/>
                        <FormControlLabel
                          value={this.state.sms}
                          control={<Checkbox color="primary" />}
                          label="SMS"
                          labelPlacement="end"
                          />
                        <FormControlLabel
                          value={this.state.email}
                          control={<Checkbox color="primary" />}
                          label="E-mail"
                          labelPlacement="end"
                          />
                        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
    )
  }
}



export default Watchlist;




