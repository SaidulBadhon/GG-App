import React, {Component, Fragment} from "react"

import { Container, Link, Box, Typography} from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://TechSecBD.com/">
        TechSecBD
      </Link>{' '} {new Date().getFullYear()}{'.'}
    </Typography>
  );
}

class Footer extends Component {
  render (){
    return (
      <Fragment>
        {/* Footer */}
        <Container maxWidth="md" component="footer">
          
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Fragment>
    )
  }
}

export default Footer













