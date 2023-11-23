import styles from "./Home.module.css"
import { useStore } from "../Store"


export default function Menu() {

  const { selection, setSelection } = useStore()

  return (
    <div className={styles.buttonContainer}>
    <section
      className={`${styles.optionGlass} ${selection === "skills" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('skills')}
    >
      <p>Skills</p>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "bio" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('bio')}
    >
      <p>Resume & Bio</p>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "projects" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('projects')}
    >
      <p>Projects</p>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "recommendations" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('recommendations')}
    >
      <p>Recommendations</p>
    </section>
  </div>
  )
}