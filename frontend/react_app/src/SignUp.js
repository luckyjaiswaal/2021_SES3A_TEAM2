import './form.css';
import React, { Component } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';


export class Signup extends Component{

    state = {
        credentials: {firstname: '',lastname:'', email:'',password: ''}
    }
    register = event => {
        axios.post('http://127.0.0.1:8000/api/register/', {
            username:this.state.credentials.firstname+this.state.credentials.lastname,
            password:this.state.credentials.password,
            email:this.state.credentials.email
        }).then(res=>{
            if(res.status===200){
                alert('register successfully')
                this.props.history.push('/login')
            }
            console.log(res)
        })
       
        .catch( error => console.log(error))
      }
      inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
      }
    render(){
      
        return(
            
            <div className="container">
            <div className="inner-width">
                <h1 className="logo">SentX</h1>
                <h1 className="middle">Register For New Account</h1>
                <div className="register-form">

                        <div className="names">
                            <input type="text" name="firstname" placeholder="First Name" required 
                            value={this.state.credentials.firstname}
                            onChange={this.inputChanged}/>
                            <input type="text" name="lastname" placeholder="Last Name" required 
                            value={this.state.credentials.lastname}
                            onChange={this.inputChanged}
                            />
                            <input type="email" name="email" placeholder="yourname@gmail.com"
                            value={this.state.credentials.email}
                            onChange={this.inputChanged}
                            required />
                            <input type="password" name="password" placeholder="Password"  required 
                            value={this.state.credentials.password}
                            onChange={this.inputChanged}
                            />
                            <input type="password" name="password2" placeholder="Confirm Password" required />
                        </div>
                        <button className="btn" onClick={this.register}>Register</button>

                    <h5 className="middle">OR</h5>

                    <Link to="/login" className="btn">Login</Link>
                </div>
            </div>
        </div>

        )
    }
}

  
export default Signup;

