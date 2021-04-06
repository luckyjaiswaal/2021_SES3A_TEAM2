import './app.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { login } from '../actions/auth';



export class Login extends Component {
  
  state = {
    username: '',
    password: '',
  };
  
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

 
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    const { username, password } = this.state;
    return (
      <div className="container">
        <div className="inner-width">
          <h1 className="logo">SentX</h1>
          <h1>Login</h1>
          <div className="register-form">
            <form onSubmit={this.onSubmit}>
              <div className="names">
                <input type="text" name="username" placeholder="Username" onChange={this.onChange}
                value={username}
                  required />
                <input type="password" name="password" placeholder="Password" onChange={this.onChange}
                value={password}
                  required />
              </div>
              <button type="submit" className="btn">Login</button>
            </form>
            <h5>OR</h5>
            <p className="middle">Don't Have Account</p>
            <Link to="/register" className="btn" >Register</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  isAuthenticated: state.auth.isAuthenticated,
  
});

export default connect((mapStateToProps), { login })(Login);




