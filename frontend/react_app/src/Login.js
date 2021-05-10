import './form.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              id="outlined-basic" label="Username" variant="outlined"
              type="text" 
              name="Username" 
              placeholder="Username"
              />
              <br/>
              <TextField 
              id="outlined-basic" label="Password" variant="outlined"
              type="password" 
              name="password" 
              placeholder="Password" 
              />
              <br/>
            </div>
            <div>
              <Link to="/stocklist"  style={{ textDecoration: 'none' }}>
                <Button className="loginbtn"
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="black"
                >
                Login
                </Button>
              </Link>
            </div>
            </form>
          </div>
          <p className="middle">Don't Have Account? <Link to="/signup">Register Here</Link></p>
        </div>
      </div>
    )
  }
}



export default Login;




