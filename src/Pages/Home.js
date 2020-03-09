import React, {Component} from "react"

import {Grid, Paper } from "@material-ui/core"

import MemeGenerator from "./Small Projects/MemeGenerator/MemeGenerator.js"
import NumberChanger from "./Small Projects/NumberChanger.js"

const style = {
  Paper:{ 
      padding:50, 
      marginTop: 10, 
      marginBottom: 10, 
      marginLeft: 5, 
      marginRight: 5 
  }
  
}

function Home() {
    return (

      <Grid container>
        <Grid item sm>
          <Paper style={style.Paper}>
            Left Pane
          </Paper>
        </Grid>

        <Grid item sm>
          <Paper style={style.Paper}>
            Left Pane
          </Paper>
        </Grid>

        <Grid item sm>
          <Paper style={style.Paper}>
            Left Pane
          </Paper>
        </Grid>
      </Grid>

    )
}

export default Home


