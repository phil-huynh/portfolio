import { useAnimate, usePresence } from "framer-motion"
import { useEffect } from "react"
import styles from "./Home.module.css"
import resumePDF from "../assets/resume.pdf"
import resumeDOCX from "../assets/resume.docx"
import { useStore } from "../Store"

export default function Bio() {

  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const { setResumeModal } = useStore()

  const rotateIn = async () => {
    await animate(scope.current, {rotateX: [90, 0]}, {duration: .7})
  }

  const rotateOut = async () => {
    await animate(scope.current, {rotateX: [0, 90]}, {duration: .7})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? rotateIn() : rotateOut()
  }, [isPresent])

  return (
    <div ref={scope} className={styles.bioContainer}>
      <button className={styles.viewResumeButton} onClick={()=>setResumeModal(true)}>View resume on this site</button>
      <h4 style={{margin: ".5rem"}}>or</h4>
      <h3 style={{marginTop: "0"}}>Download my resume</h3>
      <a href={resumeDOCX} download="Phil_Huynh_Resume">
        <button className={styles.resumeDownloadButton}> .docx </button>
      </a>
      <a href={resumePDF} download="Phil_Huynh_Resume">
        <button className={styles.resumeDownloadButton}>  .pdf </button>
      </a>
      <ul style={{textAlign: "left"}}>
        <li className={styles.bulletPoint}>
          Worked with an Agile team developing, maintaining, and updating the core Galvanize systems including the Student Information Systems and Interactive Course Software used daily by 1500+ students and staff.
        </li>
        <li className={styles.bulletPoint}>
          Developed ELT process in a Django back-end to distribute student data across Postgres tables in order to streamline the work of the administrative teams and eliminate hours spent doing data entry.
        </li>
        <li className={styles.bulletPoint}>
          Converted Django views to RESTful API endpoints and updated server rendered templates to React components in order to improve the UI/UX for specific Student Information System features.
        </li>
        <li className={styles.bulletPoint}>
          Implemented dashboards for instructors and cohort leads to allow them to toggle features, manage student improvement plans, and document student interactions.
        </li>
        <li className={styles.bulletPoint}>
          Mentored 300+ students and provided supplemental instruction in Python, Javascript, HTML, CSS, React, Django, FastAPI, PostgreSQL, Microservice architecture, Docker, Auth, CI/CD, and core computer science topics.
        </li>
      </ul>


    </div>
  )
}