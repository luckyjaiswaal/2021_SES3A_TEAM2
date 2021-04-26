import './stocklist.css';
import React, { Component } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@material-ui/core";
  
  function createData(stock, symbol, price, score) {
    return {stock, symbol, price, score};
  }
  
  const rows = [
    createData('Tesla', 'TSLA', '$420 ↑ 50', '69/100'),
    createData('Google', 'GOOGL', '$330 ↓ 30', '40/100'),
    createData('Amazon', 'AMZN', '$563 ↑ 40', '55/100'),
    createData('Facebook', 'FB', '$450 ↑ 10', '77/100'),
  ];


  export default class StockList extends Component {
      render() {
          return (
            <TableContainer component={Paper} className="tablecontainer" style={{width:650}}> 
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
                    <Button>More Info</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
    }
}