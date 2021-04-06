import './app.css';
import React, { Component } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../actions/auth'
import { createMessage } from '../actions/messages';
import { logout } from '../actions/auth';


export class Signup extends Component{
  
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
      };
    
      static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };
    
      onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
          this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        } else {
          const newUser = {
            username,
            password,
            email,
          };
          this.props.register(newUser);
          {window.location.href = " http://127.0.0.1:8000/"}
          
          
        }
      };
    
      onChange = (e) => this.setState({ [e.target.name]: e.target.value });

      
    render(){
        // if (this.props.isAuthenticated) {
        //     return <Redirect to="/" />;
        // }
         
         const { username, email, password, password2 } = this.state;
        return(
            
            <div className="container">
            <div className="inner-width">
                <h1 className="logo">SentX</h1>
                <h1 className="middle">Register For New Account</h1>
                <div className="register-form">
                    <form onSubmit={this.onSubmit}>
                        <div className="names">
                            <input type="text" name="username" placeholder="First Name" onChange={this.onChange}
                value={username} required />
                            <input type="text" placeholder="Last Name" required />
                            <input type="email" name="email" placeholder="yourname@gmail.com" onChange={this.onChange}
                value={email
                }required />
                            <input type="password" name="password" placeholder="Password" onChange={this.onChange}
                value={password} required />
                            <input type="password" name="password2" placeholder="Confirm Password" onChange={this.onChange}
                value={password2} required />
                        </div>
                        <button type="submit"  className="btn">Register</button>
                    </form>
                    <h5 className="middle">OR</h5>

                    <Link to="/" className="btn">Login</Link>
                </div>
            </div>
        </div>

        )
    }
}
const mapStateToProps1 = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
export default connect(mapStateToProps1, { register, createMessage })(Signup);

