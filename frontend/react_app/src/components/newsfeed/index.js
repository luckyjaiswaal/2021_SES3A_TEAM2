import './newsfeed.css';
import React, { Component } from "react";
import { Table, TableRow, TableCell, Container } from "@material-ui/core";


function createData(story, date) {
    return {story,date};
  }
  

const rows = [
    createData('Story1', '19/04'),
    createData('Story2', '19/04'),
    createData('Story3', '19/04'),
    createData('Story4', '19/04'),
  ];

export default class Newsfeed extends Component {
    render() {
        return (

<div>
    <Table>
        <TableRow style={{backgroundColor:'#363538'}}>
            <TableCell style={{color: '#F6F6F6'}}>NewsFeed</TableCell>
        </TableRow>
        
    {rows.map((row) => (
    <Container className="newsfeed">
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
                    </TableRow>
                    
                    </Container>
    ))}
                   </Table>

        
</div>

        )
    }
}