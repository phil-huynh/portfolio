import TechIcons from "./TechIcons"
import IntroAndContact from "./IntroAndContact"
import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import "./App.css"
import { useStore } from "./Store"


function Home() {

  const { locate, locate2, locate3 } = useStore()

  return (
    <div className="wrapper">
      <motion.div
        className="overlay"
        initial={{ opacity: .4}}
        animate={{ opacity: .2 }}
        transition={{ duration: 1.5, delay: .2 }}
        >
        <motion.h1
          animate={{ fontSize: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: .6 }}
        >
          Greetings!
        </motion.h1>
      </motion.div>
      <div className="contents">
        <Grid container >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              "display": "flex",
              "justifyContent": "center",
            }}
          >
            <IntroAndContact/>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              "display": "flex",
              "justifyContent": "center",
            }}
          >
            <TechIcons/>
          </Grid>
        </Grid>
        <div></div>
      </div>
    </div>
  )
}

export default Home

