import './stocklist.css';
import React, { Component } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });
  
  function createData(stock, symbol, price, score) {
    return {stock, symbol, price, score};
  }
  
  const rows = [
    createData('Tesla', 'TSLA', '$420 ↑ 50', '69/100'),
    createData('Google', 'GOOGL', '$330 ↓ 30', '40/100'),
    createData('Amazon', 'AMZN', '$563 ↑ 40', '55/100'),
    createData('Facebook', 'FB', '$450 ↑ 10', '77/100'),
  ];


  export default class Dashboard extends Component {
      render() {
          return (
            <TableContainer component={Paper}>
            <Table className="table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Stock</TableCell>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Sentiment Score</TableCell>
                  <TableCell align="right">Action</TableCell> 
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