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

  // const rotateIn = async () => {
  //   await animate(
  //     'section',
  //     {rotateX: [270, 0]},
  //     {
  //       duration: 1.7,
  //       delay: stagger(.25, {startDelay: .1}),
  //       type: "spring",
  //       bounce: .5
  //     }
  //   )
  // }

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
          <Grid
            item
            key={project.name}
            className={styles.projectGridSection}
            xs={12} sm={12} md={12} lg={6} xl={6}
          >
            <section className={`${styles.projectMenuCard}`}
                onClick={()=>changePage(project.path)}>
              <div
                className={styles.menuCardBackGround}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              />
              <div className={styles.menuCardOverlay}></div>
              <div className={styles.projectNameContainer}>
                <p
                  className={`text-shadow ${styles.projectName}`}
                  onClick={()=>changePage(project.path)}
                >
                  {project.name}
                </p>
              </div>
              <div className={styles.back}>
                <p className={styles.backText}>
                  {project.message}
                </p>
                <div className={styles.backButtonContainer}>
                  <button className={styles.cardBackButton}>
                    See more
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







