import './form.css';
import React, { Component } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';



export class Signup extends Component{
   
    render(){
      
        return(
            
            <div className="container">
            <div className="inner-width">
                <h1 className="logo">SentX</h1>
                <h1 className="middle">Register For New Account</h1>
                <div className="register-form">
                    <form>
                        <div className="names">
                            <input type="text" name="username" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                            <input type="email" name="email" placeholder="yourname@gmail.com"
                required />
                            <input type="password" name="password" placeholder="Password"  required />
                            <input type="password" name="password2" placeholder="Confirm Password" required />
                        </div>
                        <Link to="/login" className="btn">Register</Link>
                    </form>
                    <h5 className="middle">OR</h5>

                    <Link to="/login" className="btn">Login</Link>
                </div>
            </div>
        </div>

        )
    }
}

  
export default Signup;

