import GitHubIcon from "../../tech_icons/GitHubIcon"
import styles from "./Osiris.module.css"

export default function GitLink () {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <a href="https://github.com/Team-Osiris-HR/BlueOcean">
        <div className={styles.linkButton}>
            <p className={styles.gitLinkText}>View the code on</p>
            <GitHubIcon width={"3.5rem"}/>
        </div>
      </a>
    </div>
  )
}


