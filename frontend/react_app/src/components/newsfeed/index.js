import './newsfeed.css';
import React, { Component } from "react";
import { Table, TableRow, TableCell, Container, TableContainer, Paper } from "@material-ui/core";


function createData(story, date) {
    return {story,date};
  }
  

const rows = [
    createData('Story1', '19/04'),
    createData('Story2', '19/04'),
    createData('Story3', '19/04'),
    createData('Story4', '19/04'),
    createData('Story4', '19/04'),
  ];

export default class Newsfeed extends Component {
    render() {
        return (
              <TableContainer component={Paper} className="tablecontainer" style={{width:600}}> 
                <Table>
                  <TableRow style={{backgroundColor:'#363538'}}>
                      <TableCell style={{color: '#F6F6F6'}}>Story</TableCell>
                      <TableCell style={{color: '#F6F6F6'}}>Date</TableCell>
                  </TableRow>

                    {rows.map((row) => (
                      <TableRow key={row.story}>
                        <TableCell component="th" scope="row">
                          {row.story}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.date}
                        </TableCell>
                      </TableRow>
                                    ))}
                  </Table>
                </TableContainer>
        )
    }
}