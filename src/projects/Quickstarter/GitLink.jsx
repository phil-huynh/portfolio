import GitLabIcon from "../../tech_icons/GitLabIcon"
import styles from "./Quickstarter.module.css"

const GitLink = () => (
<div className={styles.linkContainer}>
  <a
    href="https://gitlab.com/PhilHuynh/quickstarter.git"
  >
    <div className={styles.linkButton}>
      <p className={styles.gitLinkText}>View the code on</p>
      <GitLabIcon width={"3.5rem"}/>
    </div>
  </a>
</div>
)

export default GitLink
