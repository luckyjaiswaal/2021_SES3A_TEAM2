import React, { Component } from "react";
import './nav.css';
import { Box, Button, InputBase } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const NavButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
    //   border: '1px solid',
      lineHeight: 1.5,
    //   backgroundColor: '#0063cc',
    //   borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        // backgroundColor: '#0069d9',
        // borderColor: '#0062cc',
        // boxShadow: 'none',
      },
      '&:active': {
        // boxShadow: 'none',
        // backgroundColor: '#0062cc',
        // borderColor: '#005cbf',
      },
      '&:focus': {
        // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  export default class NavBar extends Component {
      render() {
          return (
        <div className="wrapper">
            <div className="nav">
                <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
                <Box fontSize="55px" className="logo">Sent<Box display="inline" fontSize="75px">X</Box></Box>
                    <Box>
                        <NavButton className="btn" disableRipple style={{fontFamily: 'Verdana', fontSize: '21px', color: 'black'}}>Dashboard</NavButton>
                        <NavButton className="btn" disableRipple style={{fontFamily: 'Verdana', fontSize: '21px', color: 'black'}}>Watchlist</NavButton>
                        <NavButton className="btn" disableRipple style={{fontFamily: 'Verdana', fontSize: '21px', color: 'black'}}>Profile</NavButton>
                        <NavButton className="btn" disableRipple style={{fontFamily: 'Verdana', fontSize: '21px', color: 'black'}}>Logout</NavButton>
                    </Box>
                    &nbsp;
                    <SearchIcon/>
                    &nbsp;&nbsp;&nbsp;
                    <div>
                      <InputBase 
                      className="input"
                      placeholder="Search for stocks" 
                      />
                    </div>
                </Box>
            </div>
        </div>
        )
    }
}