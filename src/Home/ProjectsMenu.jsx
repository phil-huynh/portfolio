import { useStore } from "../Store"
import { useNavigate } from "react-router-dom";
import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";
import styles from "./Home.module.css"
import { Grid } from "@mui/material";

export default function ProjectsMenu() {
  const { firstTime, setFirstTime } = useStore()
  const navigate = useNavigate()

  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const { projectsList:projects } = useStore()

  const changePage = (path) => {
    firstTime && setFirstTime(false)
    navigate(path)
  }

  const rotateIn = async () => {
    await animate('section', {rotateX: [270, 0]}, {duration: 1.7,  type: "spring", bounce: .5})
  }

  const rotateOut = async () => {
    await animate('section', {rotateX: [0, 270]}, {duration: 1.2,  type: "spring", bounce: .5})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? rotateIn() : rotateOut()
  }, [isPresent])

  return (

    <div className={styles.projectMenuContainer} ref={scope}>
      <Grid container>
        {projects.map(project => (
          <Grid item className={styles.projectGridSection} key={project.name} xs={12} sm={12} md={12} lg={6} xl={6}>
            <section
              style={{backgroundImage: `url(${project.image})`, backgroundPosition: "center", backgroundSize: "cover", overflow: "hidden"}}
              className={`glass ${styles.projectMenuCard}`}
              onClick={()=>changePage(project.path)}
            >
              <h2 >{project.name}</h2>
            </section>
          </Grid>
        ))}
      </Grid>

    </div>
  )
}







