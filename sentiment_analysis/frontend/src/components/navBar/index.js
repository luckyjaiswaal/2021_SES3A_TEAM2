import React, { Component } from "react";
import './nav.css';
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default class NavBar extends Component {
    render() {
        return (
        <div className="nav">
          <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
            <Box fontSize="55px" className="logo">Sent<Box display="inline" fontSize="75px">X</Box></Box>
            <Box>
              <Button className="btn" color="primary">Dashboard</Button>
              <Button className="btn" color="primary">Watchlist</Button>
              <Button className="btn" color="primary">Profile</Button>
            </Box>
          </Box>
        </div>
        )
    }
}