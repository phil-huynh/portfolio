import IntroAndContact from "./IntroAndContact"
import { Grid } from "@mui/material"
import { useStore } from "../Store"
import { usePresence, useAnimate } from "framer-motion"
import { useEffect } from "react";
import Options from "./Options"
import styles from "./Home.module.css"
import ResumeModal from "../ResumeModal";



export default function Home() {

  const { firstTime, setFirstTime, resumeModal } = useStore()

  const [page, animatePage] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()
  const [greetingRef, animateGreeting] = useAnimate()
  const [overlayRef, animateOverlay] = useAnimate()


  const pageEnterAnimation = async () => {
    if (firstTime) {
      animateOverlay(overlayRef.current, {opacity: [.15]}, {duration: 2})
      await animateGreeting(greetingRef.current, {opacity: 1}, {duration: .05, delay: .5})
      await animateGreeting(greetingRef.current, { fontSize: 0, opacity: [1,0] }, { duration: 1, delay: 1} )
      setFirstTime(false)
    }
    else {
      await animatePage(page.current, {opacity: [0, 1]}, {duration: 1})
      animateOverlay(overlayRef.current, {opacity: [.15]}, {duration: 2})
    }
  }

  const pageExitAnimation = async () => {
    await animatePage( page.current, { opacity: [1, 0] }, { duration: .8 } )
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? pageEnterAnimation() : pageExitAnimation()
  }, [isPresent])

  return (
    <div className={styles.wrapper} key={'home'} ref={page}>
      <div className={styles.overlay} ref={overlayRef}/>
      { firstTime && <div className="greeting" ref={greetingRef}> <p>Greetings!</p> </div> }
      <div className={styles.contents}>
        { resumeModal && <ResumeModal /> }
        <Grid container className={styles.homeGridContainer}>
          <Grid item xs={12} sm={12} md={6} lg={5.5} xl={5} className={styles.homeGridSection}>
            <IntroAndContact/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6.5} xl={7} className={styles.homeGridSection}>
            <Options/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}


