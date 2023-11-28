import { useStore } from "../Store"
import styles from "./Home.module.css"


export default function Menu() {

  const { selection, setSelection } = useStore()

  return (
    <div className={styles.buttonContainer}>
    <section
      className={`${styles.menuItem}`}
      onClick={()=>setSelection('projects')}
    >
            <p
        className={selection === "projects" ?
        styles.selectedMenuItemLabel : styles.menuItemLabel}
        onClick={()=>setSelection('projects')}
      >
        Projects
      </p>
    </section>

    {/* <section
      className={`${styles.menuItem}`}
      onClick={()=>setSelection('bio')}
    >
      <p
        className={selection === "bio" ?
        styles.selectedMenuItemLabel : styles.menuItemLabel}
        onClick={()=>setSelection('bio')}
      >
        Resume & Bio
      </p>
    </section> */}
    <section
      className={`${styles.menuItem}`}
      onClick={()=>setSelection('testimonials')}
    >
      <p className={selection === "testimonials" ?
        styles.selectedMenuItemLabel : styles.menuItemLabel}
        onClick={()=>setSelection('testimonials')}
      >
        Testimonials
      </p>
    </section>
    <section
      className={`${styles.menuItem}`}
      onClick={()=>setSelection('skills')}
    >
            <p
        className={selection === "skills" ?
        styles.selectedMenuItemLabel : styles.menuItemLabel}
        onClick={()=>setSelection('skills')}
      >
        Skills
      </p>
    </section>
  </div>
  )
}