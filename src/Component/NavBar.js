import React, {Component} from "react"

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, /*Switch, Route, Redirect, Link, */Link } from "react-router-dom"

function NavBar(propos) {

    const [value, setValue] = React.useState(0);


    const windowID = 0;

    function handleChange (event, newValue) {

        console.log("PROPOSSSSS :::::     " , propos)

        setValue(newValue);
        console.log("handleChange", newValue)
/*
        if(newValue === 0){
            window.location.replace("/");
            windowID = newValue

        }

        if(newValue === 1){
            window.location.replace("/Blog");
            windowID = newValue


        }
        if(newValue === 2){
            window.location.replace("/About");
            windowID = newValue
        }

        if(newValue === 3){
            window.location.replace("/LogIn");
            windowID = newValue
        }

        if(newValue === 4){
            window.location.replace("/SingUp");
            windowID = newValue
        }
        */
    }



    return (
        <Router>
            <Paper>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    >
                    {console.log(value)}

                    <Tab label="Home"  component={Link} to={"/"}/>

                    <Tab label="Blog" component={Link} to={"/Blog"}/>


                    <Tab label="About" component={Link} to={"/About"}/>

                    <Tab label="Log In" component={Link} to={"/LogIn"}/>
                    <Tab label="Sign Up" component={Link} to={"/SingUp"}/>


                    {/* propos.auth ?<Tab label="LogIn" /><Tab label="Logout" /> */}

                </Tabs>
            </Paper>
        </Router>
    )
}

export default NavBar
