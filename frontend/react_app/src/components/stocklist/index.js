import './stocklist.css';
import React, { Component } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@material-ui/core";
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
// import { Link } from 'react-router-dom';

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

  export default class Dashboard extends Component {
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

  }
  return (
    <TableContainer component={Paper} className="tablecontainer" style={{width:1200}}> 
    <Table className="table" aria-label="simple table" style={{ minWidth: 650}}>
      <TableHead className="head">
        <TableRow style={{backgroundColor:'#363538'}}>
          <TableCell style={{color: '#F6F6F6'}}>Stocks</  TableCell>
          {/* <TableCell style={{color: '#F6F6F6'}}>Symbol</TableCell>
          <TableCell style={{color: '#F6F6F6'}}>Price</TableCell>
          <TableCell style={{color: '#F6F6F6'}}>Sentiment Score</TableCell>
          <TableCell align="right" style={{color: '#F6F6F6'}}>Action</TableCell>  */}
        </TableRow>
      </TableHead>
      <TableBody>
        <SearchBar
          placeholder="Search"
          onChange={(e) => searchData(e.target.value)}
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
