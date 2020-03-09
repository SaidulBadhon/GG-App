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

import Typography from '@material-ui/core/Typography';


class Register extends Component {

    render (){
        return (
        
            <div className="base-container">
                <div className="content">
                    <div className = "image">
                        <img src={loginImg} />
                    </div>
                    <br></br>
                    <Typography className="FormHeader" component="h2" variant="h5">
                    Register
                    </Typography>
                    <form>
                    <div className="form-group">
                        <div className="form-group-object-left">

                            <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="fastName"
                            label="Fast Name"
                            name="fastName"
                            autoComplete="fastName"
                            autoFocus/>
                        </div>

                        <div className="form-group-object-right">

                            <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lastName"
                            autoFocus/>
                         </div>

                    </div>

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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus/>

                        <TextField 
                        type="number"

                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="number"
                        label="Mobile Number"
                        name="number"
                        autoComplete="number"
                        min="10" 
                        max="11"
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
                        autoComplete="current-password"
                    />

                    <Button  className="form-button"
                    style={{width: "35em"}}           
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >Register
                    </Button>
                </form>

                </div>
            </div>
        )
        
    }
}

export default Register
