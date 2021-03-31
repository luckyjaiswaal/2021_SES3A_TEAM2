import React, { Component } from "react";
import './nav.css';
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default class NavBar extends Component {
    render() {
        return (
        <div className="nav">
          <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
            <Typography>SentX</Typography>
            <Box>
              <Button color="primary">Dashboard</Button>
              <Button color="primary">Watchlist</Button>
              <Button color="primary">Profile</Button>
            </Box>
          </Box>
        </div>
        )
    }
}