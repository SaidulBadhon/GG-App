import "./Header.css"

import React from 'react';

import { AppBar , Toolbar,Typography,IconButton,Switch,FormControlLabel,FormGroup, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import NavBar from "./NavBar"

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, /*Switch, Route, Redirect,*/ Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

//  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
        <Typography variant="h6" className={classes.title}>
            TechSecBD
        </Typography>
{ /*
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>


          <Tabs>
              <Tab label="Home" />
              <Tab label="Blog"  />
              <Tab label="About" component={Link} to={"/About"} />
              <Tab label="Log In" />
              <Tab label="Sign Up" />
          </Tabs>
*/ }
          <NavBar/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
