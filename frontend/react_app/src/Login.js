import './form.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Button, TextField, Typography} from "@material-ui/core";




export class Login extends Component {
  

  



 
  render() {
    
    return (
      <div className="container">
        <div className="inner-width">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <div className="register-form">
          <form>
            <div className="names">
              <TextField 
              type="text" 
              name="username" 
              placeholder="Username"
              required
              />
              <TextField 
              type="password" 
              name="password" 
              placeholder="Password" 
              required
                />
            </div>
            <div>
              <Link to="/stocklist">
                <Button className="loginbtn"
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                >
                Login
                </Button>
              </Link>
            </div>
            </form>
            <p className="middle">Don't Have Account? <Link to="/signup">Register Here</Link></p>
          </div>
        </div>
      </div>
    )
  }
}



export default Login;




