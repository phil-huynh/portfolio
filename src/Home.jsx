import TechIcons from "./TechIcons"
import IntroAndContact from "./IntroAndContact"
import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useStore } from "./Store"
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion"



function Home() {

  const { firstTime, setFirstTime, isXL, isLG, isMD, isSM, isXS } = useStore()
  const navigate = useNavigate()

  const changePage = (path) => {
    firstTime && setFirstTime(false)
    navigate(path)
  }
  console.log("\n")
  console.log("isXL", isXL)
  console.log("isLG", isLG)
  console.log("isMD", isMD)
  console.log("isSM", isSM)
  console.log("isXS", isXS)

  const getGreetingSize = () => {
    if (isXL) return "14rem"
    if (isLG) return "12rem"
    if (isMD) return "9rem"
    if (isSM) return "7rem"
    if (isXS) return "6rem"
  }

  return (
    <motion.div
      className="wrapper"
      key={'home'}
      initial={!firstTime ? { opacity: .3 } : false}
      animate={{opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="overlay"
        initial={{ opacity: .4}}
        animate={{ opacity: .2 }}
        transition={{ duration: 1.5, delay: .2 }}
      />
      {firstTime ?
        <motion.h1
          className="greeting"
          initial={{fontSize: getGreetingSize()}}
          animate={{ fontSize: 0, opacity: 0 }}
          transition={{ duration: 1, delay: .8 }}
        >
          Greetings!
        </motion.h1>
        :null
      }
      <div className="contents">
        <Grid container >
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={6.25}
            xl={5}
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
            lg={5.75}
            xl={7}
            sx={{
              "display": "flex",
              "justifyContent": "center",
            }}
          >
            <TechIcons/>
          </Grid>
        </Grid>
        <div>
          <h2 style={{"cursor": "pointer"}}onClick={()=>changePage("strings-theory")}>Strings Theory</h2>
          <h2 style={{"cursor": "pointer"}}onClick={()=>changePage('quickstarter')}>Quickstarter</h2>
          <h2 style={{"cursor": "pointer"}}onClick={()=>changePage('sales-probabilities')}>Sales Probabilites</h2>
          <h2 style={{"cursor": "pointer"}}onClick={()=>changePage('osiris')}>Osiris</h2>
          <h2 style={{"cursor": "pointer"}}onClick={()=>changePage('ecommerce')}>E-Commerce</h2>
        </div>
      </div>
    </motion.div>
  )
}

export default Home

