import GitHubIcon from "../../tech_icons/GitHubIcon"
import styles from "./Strings.module.css"

const GitLink = () => (
  <>
    <a href="https://github.com/phil-huynh/mvp">
      <button className={`glass ${styles.linkButton}`}>
        <span className={styles.gitLink}>
          <span className={styles.gitLinkText}>
            View the code on
          </span>
          <GitHubIcon width={"3.5rem"} path="mvp"/>
        </span>
      </button>
    </a>
  </>
)

export default GitLink