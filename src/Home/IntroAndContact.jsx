import GitHubIcon from "../tech_icons/GitHubIcon"
import GitLabIcon from "../tech_icons/GitLabIcon"
import LinkedInIcon from "../tech_icons/LinkedInIcon"
import Grid from '@mui/material/Grid';
import { useAnimate, usePresence, stagger } from "framer-motion"
import { useStore }  from "../Store"
import { useEffect } from "react";
import styles from "./Home.module.css"
import HomeTools from "./Tools.jsx"
import Menu from "./Menu";
import resumePDF from "../assets/resume.pdf"
import resumeDOCX from "../assets/resume.docx"

export default function IntroAndContact() {
  const { firstTime, setSelection, setFirstTime, selection, setResumeModal } = useStore()

  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const transition = firstTime ?
    {
      duration: 1.1,
      delay: stagger(.2, {startDelay: 2}),
      type: "spring",
      bounce: ".1"
    }
    :
    {
      duration: 1.1,
      delay: stagger(.2),
      type: "spring",
      bounce: ".1"
    }


  const slideInAnimation = async () => {
    await animate('section', {x: [2000, 0], opacity: [0, 1]}, transition)

  }

  const slideOutAnimation = async () => {
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? slideInAnimation() : slideOutAnimation()
  }, [isPresent])

  return (
    <div
      className={styles.introContainer}
      ref={scope}
    >
      <section className={`glass ${styles.topCard}`}>
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
              <div className={styles.linksContainer}>
                <LinkedInIcon width={"2.5rem"}/>
                <a href="https://github.com/phil-huynh">
                  <GitHubIcon width={"2.5rem"}/>
                </a>
                <GitLabIcon width={"2.5rem"}/>
              </div>
              <button className={styles.viewResumeButton} onClick={()=>setResumeModal(true)}>View my resume here</button>
              <h4 style={{margin: ".5rem"}}>or</h4>
              <h3 style={{marginTop: "0"}}>Download </h3>
              <a href={resumePDF} download="Phil_Huynh_Resume">
                <button className={styles.resumeDownloadButton}>  .pdf </button>
              </a>
              <a href={resumeDOCX} download="Phil_Huynh_Resume">
                <button className={styles.resumeDownloadButton}> .docx </button>
              </a>
            </div>
          </Grid>
        </Grid>
      </section>

      {/* <HomeTools/> */}

      <Menu/>
    </div>
  )
}