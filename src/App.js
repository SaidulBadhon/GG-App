import React, {Component, Fragment} from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Header from "./Component/Header.js"
import Footer from "./Component/Footer.js"

import Home from "./Pages/Home.js"

import GLogIn from "./Pages/NOT FOR USE LogIn.js"
//import SingUp from "./Pages/SingUp.js"

import SingUp from "./Pages/Login/Register.js"
import LogIn from "./Pages/Login/Login.js"

import Blog from "./Pages/Blog.js";
import About from "./Pages/About.js";

export default class extends Component {
  render(){
    return (
      <Fragment>
        <Header />
              <Router>  
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Blog" component={Blog} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/LogIn" component={LogIn} />
                    <Route exact path="/LogInGoogle" component={GLogIn} />
                    <Route exact path="/SingUp" component={SingUp} />
                    <Redirect to="404" />
                </Switch>
            </Router>
        <Footer />
      </Fragment>

    )
  }
}