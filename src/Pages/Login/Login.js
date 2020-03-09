import React, {Component} from "react"
import loginImg from "./Logo/Login.svg"
import "./LoginStyle.css"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';


class Login extends Component {

    render (){
        return (
        
            <div className="base-container">


                <div className="content">
                    <div className = "image">
                        <img src={loginImg} />
                    </div>
                    <br></br>
                    <Typography className="FormHeader" component="h2" variant="h5">
                    Sign in
                </Typography>

                    <form>
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="User Name"
                        name="username"
                        autoComplete="username"
                        autoFocus/>

                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"/>


                        <Button className="form-button"         
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >Login
                        </Button>
                    </form>
                </div>
        </div>
        )
        
    }
}

export default Login
