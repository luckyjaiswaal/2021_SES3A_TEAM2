import './stocklist.css';
import stocks from "../../stocks.json";
import SearchBar from "../../SearchBar.js";
import Card from "../../Card.js";
import React, { Component, useState } from "react";
import Fuse from "fuse.js";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';

  function App () {

    const [data, setData] = useState(stocks);

    const searchData = (pattern) => {
      if (!pattern) {
        setData(stocks);
        return;
      }

    const fuse = new Fuse(data, {
      keys: ["stock", "symbol"],
    });

    const result = fuse.search(pattern);

    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  }

  
  return (
    <TableContainer component={Paper} className="tablecontainer" style={{width:1215}}> 
    <Table className="table" aria-label="simple table" style={{ minWidth: 650}}>
      <TableBody>
        <SearchBar
          placeholder="Search"
          onChange = {(e) => searchData(e.target.value)}
        />
        <div className = "Container">
        {data.map((item) => (
          <Card {...item} key = {item.name} />
        ))}</div>
      </TableBody>
    </Table>
  </TableContainer>
  )
}

  /*export default class Dashboard extends Component {
      render() {
          return (
            <TableContainer component={Paper} className="tablecontainer" style={{width:1200}}> 
            <Table className="table" aria-label="simple table" style={{ minWidth: 650}}>
              <TableHead className="head">
                <TableRow style={{backgroundColor:'#363538'}}>
                  <TableCell style={{color: '#F6F6F6'}}>Stock</TableCell>
                  <TableCell style={{color: '#F6F6F6'}}>Symbol</TableCell>
                  <TableCell style={{color: '#F6F6F6'}}>Price</TableCell>
                  <TableCell style={{color: '#F6F6F6'}}>Sentiment Score</TableCell>
                  <TableCell align="right" style={{color: '#F6F6F6'}}>Action</TableCell> 
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
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
                    <TableCell align="right">
                    <Link to={`stock/${row.symbol}`} style={{ textDecoration: 'none' }}>More info</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
    }
  }*/

  export default App;
