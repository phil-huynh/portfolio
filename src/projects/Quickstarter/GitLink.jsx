import GitLabIcon from "../../tech_icons/GitLabIcon"
import styles from "./Quickstarter.module.css"

const GitLink = () => (
<div style={{width: "100%", display: "flex", justifyContent: "center"}}>
  <a
    href="https://gitlab.com/PhilHuynh/quickstarter.git"
    style={{width: "20%"}}
  >
    <div className={styles.linkButton}>
      <p className={styles.gitLinkText}>View the code on</p>
      <GitLabIcon width={"3.5rem"}/>
    </div>
  </a>
</div>
)

export default GitLink
