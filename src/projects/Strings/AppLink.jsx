import styles from "./Strings.module.css"

const AppLink = () => (
  <a href="http://stringstheory.net">
    <button className={`glass ${styles.linkButton}`}>
      <p className={styles.appLink}>Click here to view the live app</p>
        <h2>http://stringstheory.net</h2>
    </button>
  </a>
)
export default AppLink