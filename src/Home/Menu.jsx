import { useStore } from "../Store"
import styles from "./Home.module.css"


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
      className={`${styles.optionGlass} ${selection === "projects" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('projects')}
    >
      <p>Projects</p>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "bio" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('bio')}
    >
      <p>Resume & Bio</p>
    </section>
    <section
      className={`${styles.optionGlass} ${selection === "testimonials" ? styles.selected : styles.menuItem}`}
      onClick={()=>setSelection('testimonials')}
    >
      <p>Testimonials</p>
    </section>
  </div>
  )
}