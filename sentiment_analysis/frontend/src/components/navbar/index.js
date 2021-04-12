import React, { Component } from "react";
import './nav.css';
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

  export default class NavBar extends Component {
      render() {
          return (
        <div className="wrapper">
            <div className="nav">
                <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
                <Box fontSize="55px" className="logo">Sent<Box display="inline" fontSize="75px">X</Box></Box>
                    <Box>
                        {/* <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div> */}
                        <Button className="btn" color="primary" style={{fontFamily: 'Verdana', fontSize: '21px', color: 'black'}}>Dashboard</Button>
                        <Button className="btn" color="primary" style={{fontFamily: 'Verdana', fontSize: '21px', color: 'black'}}>Watchlist</Button>
                        <Button className="btn" color="primary" style={{fontFamily: 'Verdana', fontSize: '21px', color: 'black'}}>Profile</Button>
                        <Button className="btn" color="primary" style={{fontFamily: 'Verdana', fontSize: '21px', color: 'black'}}>Logout</Button>
                    </Box>
                </Box>
            </div>
        </div>
        )
    }
}