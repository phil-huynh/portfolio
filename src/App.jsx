// import { useState } from "react"
import TechIcons from "./TechIcons"

import darkSchema from "./assets/e_commerce/SDC_schema_dark.png"
import lightSchema from "./assets/e_commerce/SDC_schema_light.png"
import IntroAndContact from "./IntroAndContact"
import { Grid } from "@mui/material"
import { useStore } from "./Store"


import { motion } from "framer-motion"
import "./App.css"

function App() {


  // const style = {
  //   "height": "100vh",
  //   "width": "100%",
  //   "display": "flex",
  //   "justifyContent": "space-around",
  //   "overflowY": "scroll",
  //   // "overflowX": "hidden"
  // }




  return (
    <div className="wrapper">
      <div className="overlay">
        <motion.h1 animate={{ fontSize: 0, opacity: 0 }} transition={{ duration: 1.5, delay: .6 }}>Greetings!</motion.h1>
      </div>
      <div className="contents" >
        {/* <div style={style}> */}
          <Grid container >
            <Grid item xs={12} sm={12} md={12} lg={6} sx={{"display": "flex", "justifyContent": "center"}} justifyContent="center">
              <IntroAndContact/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} sx={{"display": "flex", "justifyContent": "center"}}>
              <TechIcons/>
            </Grid>
          </Grid>
        {/* </div> */}
      </div>
    </div>
  )
}

export default App





      //  <section>
      //     <h1>hello world</h1>
      //     <img src={darkSchema}></img>
      //     <img src={lightSchema}></img>
      //     <img src="https://media.giphy.com/media/H47rgIuBFw7g0iIG1V/giphy.gif"></img>
      //     <img src="https://media.giphy.com/media/9bPGXl6gGx4zeKXBXM/giphy.gif"></img>
      //     <img src="https://media.giphy.com/media/ovB7jDDERqLsZMzp7k/giphy.gif"></img>
      //   </section>