import "./Header.css"
import React from "react"

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, /*Switch, Route, Redirect,*/ Link } from "react-router-dom"
import { green, orange } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


/*

    <Tabs className="NavBarTabs"
        fullWidth={true}
        onChange={handleChange}
        >
        <div className="NavBarTab"><Tab className="NavBarTab" label="Home" /*component={Link} to={"/"}/></div>*/
        //<div className="NavBarTab"><Tab className="NavBarTab" label="Blog" /*onClick={OnBlogButtonClick} /*component={Link} to={"/Blog"}*//></div>
        //<div className="NavBarTab"><Tab className="NavBarTab" label="News" /*onClick={OnBlogButtonClick} /*component={Link} to={"/Blog"}*//></div>
        //<div className="NavBarTab"><Tab className="NavBarTab" label="About" /*component={Link} to={"/About"}*//></div>
        //<div className="NavBarTab"><Tab className="NavBarTab"  label="About" /*component={Link} to={"/About"}*//></div>
        //<div className="NavBarTab"><Tab className="NavBarTab" label="Log In" /*component={Link} to={"/LogIn"}*//></div>
        //<div className="NavBarTab"><Tab className="NavBarTab" label="Sign Up" /*component={Link} to={"/SingUp"}*//></div>

        /* propos.auth ?<Tab label="LogIn" /><Tab label="Logout" /> */
    //</Tabs>*/
    


function NavBar() {

    const [value, setValue] = React.useState(0);


    const windowID = 0;

    function handleChange (event, newValue) {


        setValue(newValue);
        console.log("handleChange", newValue)

        if(newValue === 0){
            window.location.replace("/");
            windowID = newValue

        }

        if(newValue === 1){
            window.location.replace("./Blog");
            windowID = newValue


        }
        if(newValue === 2){
            window.location.replace("./About");
            windowID = newValue
        }

        if(newValue === 3){
            window.location.replace("./LogIn");
            windowID = newValue
        }

        if(newValue === 4){
            window.location.replace("./SingUp");
            windowID = newValue
        }

    }
    const innerTheme = createMuiTheme({
        palette: {
          secondary: {
            main: green[500],
          },
        },
      });
      
    return (
        <Router>
            <div className="NavBarHead">
                <Button className="NavBarTab" onClick={() => {window.location.replace("/")}} >
                    Home
                </Button>

                <Button className="NavBarTab" onClick={() => {window.location.replace("/Blog")}}>
                    Blog
                </Button>
                
                <Button className="NavBarTab" onClick={() => {window.location.replace("/News")}}>
                    News
                </Button>
                <Button className="NavBarTab" onClick={() => {window.location.replace("/LogIn")}}>
                    LogIn
                </Button>

                <Button className="NavBarTab" onClick={() => {window.location.replace("/SingUp")}}>
                    SingUp
                </Button>
            </div> 

        </Router>
    )
}

export default NavBar
