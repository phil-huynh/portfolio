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
      <h2>Skills</h2>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "bio" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('bio')}
    >
      <h2>Resume & Bio</h2>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "projects" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('projects')}
    >
      <h2>Projects</h2>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "recommendations" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('recommendations')}
    >
      <h2>Recommendations</h2>
    </section>
  </div>
  )
}