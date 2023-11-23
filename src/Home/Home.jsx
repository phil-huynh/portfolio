import IntroAndContact from "./IntroAndContact"
import { Grid } from "@mui/material"
import { useStore } from "../Store"
import { usePresence, useAnimate } from "framer-motion"
import { useEffect } from "react";
import Options from "./Options"
import styles from "./Home.module.css"


function Home() {

  const { firstTime, setFirstTime, isXL, isLG, isMD, isSM, isXS, selection } = useStore()


  const [isPresent, safeToRemove] = usePresence()
  const [page, animatePage] = useAnimate()
  const [greetingRef, animateGreeting] = useAnimate()
  const [overlayRef, animateOverlay] = useAnimate()



  const getGreetingSize = () => {
    if (isXL) { return "14rem" }
    if (isLG) { return "12rem" }
    if (isMD) { return "9rem" }
    if (isSM) { return "7rem" }
    if (isXS) { return "5rem" }
  }

  const pageEnterAnimation = async () => {
    if (firstTime) {
      await animateOverlay(overlayRef.current, {opacity: [.1]}, {duration: 2})

      await animateGreeting(
        greetingRef.current,
        {
          fontSize: [getGreetingSize(), 0],
          opacity: [1,0]
        },
        { duration: 1.5, delay: 1}
      )
    } else {
      await animateOverlay(overlayRef.current, {opacity: [.1]}, {duration: 2})
      await animatePage(page.current, {opacity: [0, 1]}, {duration: 1})
    }
  }

  const pageExitAnimation = async () => {
    await animatePage(
      page.current,
      { opacity: [1, 0] },
      { duration: 1.5 }
    )
    safeToRemove()
  }


  useEffect(() => {
    isPresent ? pageEnterAnimation() : pageExitAnimation()
  }, [isPresent])

  return (
    <div
      className={styles.wrapper}
      key={'home'}
      ref={page}
    >
      <div
        className={styles.overlay}
        ref={overlayRef}
      />
      { firstTime ? <h1 className={styles.greeting} ref={greetingRef}> Greetings! </h1> :null }
      <div className="contents">
        <Grid container className={styles.homeGridContainer}>
          <Grid
            item
            xs={12} sm={12} md={6} lg={5.5} xl={5}
            className={styles.homeGridSection}
          >
            <IntroAndContact/>
          </Grid>
          <Grid
            item
            xs={12} sm={12} md={6} lg={6.5} xl={7}
            className={styles.homeGridSection}
          >
            <Options/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home

