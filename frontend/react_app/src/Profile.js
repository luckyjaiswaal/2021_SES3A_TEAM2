import './form.css';
import React, { Component } from 'react';
import { Container, TextField, Avatar, Typography, Button, Grid} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
// import { Link, Redirect } from 'react-router-dom';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import {useForm, Controller} from 'react-hook-form'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
      
class Profile extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              // autoFocus
              />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              // autoFocus
              />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              // autoFocus
              />
            <TextField
              variant="outlined"
              margin="normal"
              // inputRef={register}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
              Save
            </Button>
            <Grid container>
            </Grid>
          </form>
        </div>
      </Container>
      );
    };
  };

  export default () => {
    const classes = useStyles();
    return (
        <Profile classes={classes} />
    )
}

  
  
  
  
  