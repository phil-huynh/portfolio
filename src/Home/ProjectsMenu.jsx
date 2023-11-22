import { useStore } from "../Store"
import { useNavigate } from "react-router-dom";
import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";
import styles from "./Home.module.css"

export default function ProjectsMenu() {
  const { firstTime, setFirstTime } = useStore()
  const navigate = useNavigate()

  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

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
      <section
        className={`glass ${styles.projectMenuCard}`}
        onClick={()=>changePage("strings-theory")}
      >
        <h2 >Strings Theory</h2>
      </section>
      <section
        className={`glass ${styles.projectMenuCard}`}
        onClick={()=>changePage("quickstarter")}
      >
        <h2>Quickstarter</h2>
      </section>
      <section
        className={`glass ${styles.projectMenuCard}`}
        onClick={()=>changePage("sales-probabilities")}
      >
        <h2>Sales Probabilites</h2>
      </section>
      <section
        className={`glass ${styles.projectMenuCard}`}
        onClick={()=>changePage("osiris")}
      >
        <h2>Osiris</h2>
      </section>
      <section
        className={`glass ${styles.projectMenuCard}`}
        onClick={()=>changePage("ecommerce")}
      >
        <h2>E-Commerce</h2>
      </section>
    </div>
  )
}







