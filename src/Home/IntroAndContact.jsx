import GitHubIcon from "../tech_icons/GitHubIcon"
import GitLabIcon from "../tech_icons/GitLabIcon"
import LinkedInIcon from "../tech_icons/LinkedInIcon"
import Grid from '@mui/material/Grid';
import { useAnimate, usePresence } from "framer-motion"
import { useStore }  from "../Store"
import { useEffect } from "react";
import styles from "./Home.module.css"
import HomeTools from "./Tools.jsx"

export default function IntroAndContact() {
  const { firstTime, setSelection, setFirstTime, selection } = useStore()

  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const transition = firstTime ? { duration: 1.2, delay: 1.5, type: "spring", bounce: ".22" } : { duration: 1, type: "spring", bounce: ".22" }


  const select = (selected) => {
    setFirstTime(false)
    setSelection(selected)
  }

  const slideInAnimation = async () => {
    await animate(scope.current, {x: 2000 }, {duration: .1})
    await animate(scope.current, {opacity: 1}, {duration: .1})
    await animate(scope.current, {x: [2000, 0]}, transition)
  }

  const slideOutAnimation = async () => {
    await animate(scope.current, {x: [0, 2000]}, {duration: 1.3})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? slideInAnimation() : slideOutAnimation()
  }, [isPresent])

  return (
    <section
      className={styles.introContainer}
      ref={scope}
    >
      <div className={`glass ${styles.topCard}`}>
        <Grid container className={styles.infoGridContainer}>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={6} className={styles.infoGridSection}>
              <div className={styles.headShot}/>
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={6} className={styles.infoGridSection}>
            <div className={styles.infoBox}>
              <h1 className={`text-shadow ${styles.name}`}>Phil Huynh</h1>
              <h2 className={`text-shadow ${styles.label}`}>Full Stack Engineer</h2>
              <a href="mailto:philiphuynh98@gmail.com">
                <h4 className={`text-shadow ${styles.email}`} >philphuynh98@gmail.com</h4>
              </a>
              <section className={styles.linksContainer}>
                <LinkedInIcon width={"2.5rem"}/>
                <a href="https://github.com/phil-huynh">
                  <GitHubIcon width={"2.5rem"}/>
                </a>
                <GitLabIcon width={"2.5rem"}/>
              </section>
              <hr/>
              <p>
              It all rolls into one
              And nothing comes for free
              There's nothing you can hold
              For very long
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <HomeTools/>
      <div className={styles.buttonContainer}>
        <div
          className={`${styles.optionGlass} ${selection === "skills" ? styles.selected : styles.menuItem}`}
          onClick={()=>select('skills')}
        >
          <h2>Skills</h2>
        </div>
        <div
          className={`${styles.optionGlass} ${selection === "bio" ? styles.selected : styles.menuItem}`}
          onClick={()=>select('bio')}
        >
          <h2>Resume & Bio</h2>
        </div>
        <div
          className={`${styles.optionGlass} ${selection === "projects" ? styles.selected : styles.menuItem}`}
          onClick={()=>select('projects')}
        >
          <h2>Projects</h2>
        </div>
        <div
          className={`${styles.optionGlass} ${selection === "recommendations" ? styles.selected : styles.menuItem}`}
          onClick={()=>select('recommendations')}
        >
          <h2>Recommendations</h2>
        </div>
      </div>
    </section>
  )
}