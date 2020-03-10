import React, {Component} from "react"
import loginImg from "./Logo/Login.svg"
import "./LoginStyle.css"

import { Button,TextField, Typography } from '@material-ui/core/';

class Login extends Component {

    render (){
        return (

            <div className="base-container" ref={this.props.containerRef}>


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
