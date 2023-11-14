import TechIcons from "./TechIcons"
import IntroAndContact from "./IntroAndContact"
import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useStore } from "./Store"
import { useNavigate } from "react-router-dom";

function Home() {

  const { locate, locate2, locate3 } = useStore()

  const navigate = useNavigate()

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
            md={7}
            lg={6.5}
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
            md={5}
            lg={5.5}
            sx={{
              "display": "flex",
              "justifyContent": "center",
            }}
          >
            <TechIcons/>
          </Grid>
        </Grid>
        <div>
          <h2 style={{"cursor": "pointer"}}onClick={()=>navigate("strings-theory")}>Strings Theory</h2>
          <h2 style={{"cursor": "pointer"}}onClick={()=>navigate('quickstarter')}>Quickstarter</h2>
          <h2 style={{"cursor": "pointer"}}onClick={()=>navigate('sales-probabilities')}>Sales Probabilites</h2>
          <h2 style={{"cursor": "pointer"}}onClick={()=>navigate('osiris')}>Osiris</h2>
          <h2 style={{"cursor": "pointer"}}onClick={()=>navigate('ecommerce')}>E-Commerce</h2>
        </div>
      </div>
    </div>
  )
}

export default Home

