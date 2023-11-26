import GitHubIcon from "../../tech_icons/GitHubIcon"
import styles from "./Osiris.module.css"

const GitLink = () => (
<div style={{width: "100%", display: "flex", justifyContent: "center"}}>
  <a href="https://github.com/Team-Osiris-HR/BlueOcean" style={{width: "20%"}}>
    <div className={`glass ${styles.linkButton}`}>
        <p className={styles.gitLinkText}>View the code on</p>
        <GitHubIcon width={"3.5rem"}/>
    </div>
  </a>
</div>
)

export default GitLink
