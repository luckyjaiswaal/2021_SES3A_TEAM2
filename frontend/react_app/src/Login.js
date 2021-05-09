import './form.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';




export class Login extends Component {
  

  



 
  render() {
    
    return (
      <div className="container">
        <div className="inner-width">
          <h1>Login</h1>
          <div className="register-form">
            <form >
              <div className="names">
                <input type="text" name="username" placeholder="Username"
                  required />
                <input type="password" name="password" placeholder="Password" 
                  required />
              </div>
              <Link to="/stocklist" className="btn" >Login</Link>
            </form>
            <p className="middle">Don't Have Account?</p>
            <Link to="/signup" className="btn" >Register</Link>
          </div>
        </div>
      </div>
    )
  }
}



export default Login;




