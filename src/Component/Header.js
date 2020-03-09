import "./Header.css"

import React from 'react';

import { AppBar , Toolbar,Typography,IconButton,Switch,FormControlLabel,FormGroup} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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


  return (
    <div className={classes.root}>
      <FormGroup>
        { /*
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
        */ }
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            TechSecBD
          </Typography>
          <NavBar  loginState />

        </Toolbar>
      </AppBar>
    </div>
  );
}
