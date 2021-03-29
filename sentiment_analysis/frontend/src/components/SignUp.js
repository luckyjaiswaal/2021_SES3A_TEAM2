import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './app.css';
function Signup() {
    const history = useHistory();
    const handleClick = () => history.push('/login');
    return (
        <div className="container">
            <div className="inner-width">
                <h1 className="logo">SentX</h1>
                <h1 className="middle">Register For New Account</h1>
                <div className="register-form">
                    <form>
                        <div className="names">
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                            <input type="email" placeholder="yourname@gmail.com" required />
                            <input type="password" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn" onClick={handleClick}>Register</button>
                    </form>
                    <h5 className="middle">OR</h5>

                    <button type="submit" className="btn" onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>


    )
}

export default Signup


