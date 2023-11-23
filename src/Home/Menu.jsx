import styles from "./Home.module.css"
import { useStore } from "../Store"


export default function Menu() {

  const { selection, setSelection, setFirstTime } = useStore()

  const select = (selected) => {
    setFirstTime(false)
    setSelection(selected)
  }

  return (
    <div className={styles.buttonContainer}>
    <section
      className={`${styles.optionGlass} ${selection === "skills" ? styles.selected : styles.menuItem}`}
      onClick={()=>select('skills')}
    >
      <h2>Skills</h2>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "bio" ? styles.selected : styles.menuItem}`}
      onClick={()=>select('bio')}
    >
      <h2>Resume & Bio</h2>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "projects" ? styles.selected : styles.menuItem}`}
      onClick={()=>select('projects')}
    >
      <h2>Projects</h2>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "recommendations" ? styles.selected : styles.menuItem}`}
      onClick={()=>select('recommendations')}
    >
      <h2>Recommendations</h2>
    </section>
  </div>
  )
}