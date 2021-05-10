import './form.css';
import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {Button, Typography, TextField} from "@material-ui/core";



export class Signup extends Component{
   
    render(){
      
        return(
            
            <div className="container">
            <div className="inner-width">
                <Typography component="h1" variant="h5">
                Register
                </Typography>  
                <div className="register-form">
                    <form>
                        <div className="names">
                            <TextField
                            id="outlined-basic" label="First Name" variant="outlined" 
                            type="text" name="username" placeholder="First Name" required />
                            <br/>
                            <TextField
                            id="outlined-basic" label="Last Name" variant="outlined" 
                            type="text" placeholder="Last Name" required />
                            <br/>
                            <TextField 
                            id="outlined-basic" label="E-Mail" variant="outlined"
                            type="email" name="email" placeholder="yourname@gmail.com" required />
                            <br/>
                            <TextField 
                            id="outlined-basic" label="Password" variant="outlined"
                            type="password" name="password" placeholder="Password"  required />
                            <br/>
                            <TextField 
                            id="outlined-basic" label="Confirm Password" variant="outlined"
                            type="password" name="password2" placeholder="Confirm Password" required />
                            <br/>
                        </div>
            <Link to="/stocklist" style={{ textDecoration: 'none' }}>
                <Button className="loginbtn"
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="black"
                >
                Register
                </Button>
            </Link>
                    </form>
                </div>
                <p className="middle">Already Have An Account? <Link to="/">Login Here</Link></p>
            </div>
        </div>

        )
    }
}

  
export default Signup;

