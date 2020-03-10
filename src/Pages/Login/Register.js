import React, {Component} from "react"
import loginImg from "./Logo/Login.svg"
import "./LoginStyle.css"

import { Button , TextField, Typography } from '@material-ui/core/';


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
