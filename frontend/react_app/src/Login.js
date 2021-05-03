import './form.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


export class Login extends Component {
  

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    axios.post('http://127.0.0.1:8000/api/login/', {
      username:this.state.credentials.username,
      password:this.state.credentials.password
    }).then((res)=>{
      if(res.status===200){
        alert('login successfully')
        this.props.history.push('/')
      }

     
    })
    
    .catch( error => console.error(error))
  }

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

 
  render() {
    
    return (
      <div className="container">
        <div className="inner-width">
          <h1>Login</h1>
          <div className="register-form">
              <div className="names">
                <input type="text" name="username" placeholder="Username"
                  value={this.state.credentials.username}
                  onChange={this.inputChanged}
                  required />
                <input type="password" name="password" placeholder="Password" 
                  value={this.state.credentials.password}
                  onChange={this.inputChanged}
                  required />
              </div>
              <button to="/" className="btn" onClick={this.login}>Login</button>
            <p className="middle">Don't Have Account?</p>
            <Link to="/signup" className="btn" >Register</Link>
          </div>
        </div>
      </div>
    )
  }
}



export default Login;




