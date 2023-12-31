import { useStore } from "../Store"
import { useNavigate } from "react-router-dom";
import { useAnimate, usePresence, stagger } from "framer-motion";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import styles from "./Home.module.css"

export default function ProjectsMenu() {

  const navigate = useNavigate()
  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()
  const { projectsList: projects, firstTime } = useStore()

  const changePage = (path) => {
    navigate(path)
  }

  const skillsTransition = firstTime ?
    {
      duration: 1.7,
      delay: stagger(.2, {startDelay: 2.2}),
      type: "spring",
      bounce: .5
    }
    :
    {
      duration: 1.7,
      delay: stagger(.2, {startDelay: .1}),
      type: "spring",
      bounce: .5
    }

  const rotateIn = async () => {
    await animate(
      'section',
      {rotateX: [270, 0]},
      skillsTransition
    )
  }

  const rotateOut = async () => {
    await animate(
      'section',
      {rotateX: [0, 270]},
      {
        duration: 1.2,
        type: "spring",
        bounce: .5
      }
    )
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? rotateIn() : rotateOut()
  }, [isPresent])

  return (

    <div className={styles.projectMenuContainer} ref={scope}>
      <Grid container className={styles.projectGridContainer}>
        {projects.map(project => (
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}
            className={styles.projectGridSection}
            key={project.name}
          >
            <section className={`${styles.projectMenuCard}`}>
              <div className={styles.menuCardBackGround}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              />
              <div className={styles.menuCardOverlay}></div>
              <div className={styles.projectNameContainer}>
                <p className={`text-shadow ${styles.projectName}`}>{project.name}</p>
              </div>
              <div className={styles.back}>
                <p className={styles.backText}>{project.message}</p>
                <div className={styles.backButtonContainer}>
                  <button className={styles.cardBackButton} onClick={()=>changePage(project.path)}>
                    <p className={styles.cardBackButtonText} onClick={()=>changePage(project.path)}>See more</p>
                  </button>
                </div>
              </div>
            </section>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}







