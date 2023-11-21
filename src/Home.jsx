import TechIcons from "./TechIcons"
import IntroAndContact from "./IntroAndContact"
import { Grid } from "@mui/material"
import { useStore } from "./Store"
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, usePresence, useAnimate } from "framer-motion"
import { useEffect } from "react";
import Options from "./Options"



function Home() {

  const { firstTime, setFirstTime, isXL, isLG, isMD, isSM, isXS, selection, locate, locate2, locate3 } = useStore()
  const navigate = useNavigate()

  const [isPresent, safeToRemove] = usePresence()
  const [page, animatePage] = useAnimate()
  const [greeting, animateGreeting] = useAnimate()

  const changePage = (path) => {
    firstTime && setFirstTime(false)
    navigate(path)
  }

  const getGreetingSize = () => {
    if (isXL) { return "14rem" }
    if (isLG) { return "12rem" }
    if (isMD) { return "9rem" }
    if (isSM) { return "7rem" }
    if (isXS) { return "5rem" }
  }

  const pageEnterAnimation = async () => {
    if (firstTime) {
      await animateGreeting(
        greeting.current,
        { fontSize: [getGreetingSize(), 0], opacity: [1,0]},
        { duration: 1.5, delay: 1}
      )
    } else {
      await animatePage(page.current, {opacity: [0, 1]}, {duration: 1.5})
    }
  }

  const pageExitAnimation = async () => {
    await animatePage(page.current, {opacity: [1, 0]}, {duration: 1.5})
    safeToRemove()
  }


  useEffect(() => {
    isPresent ? pageEnterAnimation() : pageExitAnimation()
  }, [isPresent])

  return (
    <div
      className="wrapper"
      key={'home'}
      ref={page}
      // initial={!firstTime ? { opacity: .3 } : 0}
      // animate={{opacity: 1}}
      // exit={{ opacity: .1 }}
      // transition={{ duration: 1 }}
    >
      <div
        className="overlay"
      />
      { firstTime ? <h1 className="greeting" ref={greeting}> Greetings! </h1> :null }
      <div className="contents">
        <Grid container style={{height:"100%"}}>
          <Grid
            item
            xs={12} sm={12} md={6} lg={5.5} xl={5}
            sx={{
              "display": "flex",
              "justifyContent": "center",
              padding: "1.5rem"
            }}
          >
            <IntroAndContact/>
          </Grid>
          <Grid
            item
            xs={12} sm={12} md={6} lg={6.5} xl={7}
            sx={{
              "display": "flex",
              "justifyContent": "center",
              padding: "1.5rem"
            }}
          >
            <Options/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home

