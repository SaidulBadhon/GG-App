import "./Header.css"
import React from 'react';

import { AppBar , Toolbar,Typography,IconButton,Switch,FormControlLabel,FormGroup, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import NavBar from "./NavBar"

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
//<AppBar position="static" >
//<Toolbar className="TitleBar">
  return (
    <div className={classes.root}>

      <header className="Header" position="static" >
        <Toolbar className="TitleBar"> 
          <div className="MenuIconButton">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>

          <Typography align="center" variant="h3" className="HaderTitle">
              TechSecBD
          </Typography>

          <div className="NavbarPC">
            <NavBar />
          </div>

        </Toolbar>

        <div className="NavbarMobile">
          <NavBar />
        </div>

      </header>
    </div>
  );
}
