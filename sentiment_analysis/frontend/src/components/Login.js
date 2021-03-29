import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './app.css';

function Login() {
    const history = useHistory();
    const handleClick = () => history.push('/register');
    const gotoDashboard = () => history.push('/');
    return (
        <div className="container">
            <div className="inner-width">
                <h1 className="logo">SentX</h1>
                <h1>Login</h1>
                <div className="register-form">
                    <form>
                        <div className="names">
                            <input type="email" placeholder="yourname@gmail.com" required />
                            <input type="password" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn" onClick={gotoDashboard}>Login</button>
                    </form>
                    <h5>OR</h5>
<p className="middle">Don't Have Account</p>
                    <button type="submit" className="btn" onClick={handleClick}>Register</button>
                </div>
            </div>
        </div>


    )
}

export default Login;


