import React, { Fragment } from "react"
//import { Card, CardContent, CardMedia, Typography, Box } from "@material-ui/core"

import Box from "@material-ui/core/Box"

import "./HomeCSS.css"


import Plate1 from "./img/HomeUI/Plate1.jpg"
import Plate2 from "./img/HomeUI/Plate2.jpg"
import Plate3 from "./img/HomeUI/Plate3.jpg"
import Plate4 from "./img/HomeUI/Plate3.jpg"


function Home() {
  function handleClickForMemeGenerator() {
      window.location.replace("/RandomProjects/MemeGenerator");
  }

  function handleClickForRandomUserFinder() {
        window.location.replace("/RandomProjects/RandomUserFinder");
    }

      function handleClickForNumberChanger() {
            window.location.replace("/RandomProjects/NumberChanger");
        }

    return (
      <Fragment>
        <div className="CardBackground">
          <div className="CardBody" onClick={handleClickForMemeGenerator}>
            <div className="HomeCardImage">
              <img src={Plate1} />
            </div>

            <div className="HeadingText" >

              <Box  fontWeight="fontWeightMedium"
                    variant="h5"
                    fontSize={45}
                    >
                  
              </Box >
            </div>

          </div>

          <div className="CardBody" onClick={handleClickForRandomUserFinder}>
            <div className="HomeCardImage">
              <img src={Plate2} />
            </div>

            <div className="HeadingText" style={{top: "68%"}} >

              <Box  fontWeight="fontWeightMedium"
                    variant="h5"
                    fontSize={38}
                    >
                    Random User Finder

              </Box >
            </div>
          </div>

          <div className="CardBody"  onClick={handleClickForNumberChanger}>
            <div className="HomeCardImage">
              <img src={Plate3} />
            </div>
            <div className="HeadingText">

              <Box  fontWeight="fontWeightMedium"
                    variant="h5"
                    fontSize={45}
                    >
                  Number Changer
              </Box >
            </div>
          </div>

          <div className="CardBody">
            <div className="HomeCardImage">
              <img src={Plate4} />
            </div>
            <div className="HeadingText" >

              <Box  fontWeight="fontWeightMedium"
                    variant="h5"
                    fontSize={45}
                    >

              </Box >
            </div>
          </div>
        </div>
      </Fragment>
      //<RandomUserList />
    )
}

export default Home
