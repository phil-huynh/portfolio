import JavascriptIcon from "../../tech_icons/JavascriptIcon"
import ReactIcon from "../../tech_icons/ReactIcon"
import ChartsJSIcon from '../../tech_icons/ChartsJSIcon'
import MaterialUIIcon from '../../tech_icons/MaterialUIIcon'
import HTMLLogo from '../../tech_icons/HTML_Logo'
import CSSLogo from "../../tech_icons/CSS_Logo"
import styles from "./Probabilities.module.css"


const SalesTools = () => (
  <div className={`glass ${styles.toolBox}`}>
    <h2>Sales Probablity charts uses</h2>
    <div className={styles.tools}>
      <HTMLLogo width={"2.5rem"}/>
      <CSSLogo width={"2.5rem"}/>
      <JavascriptIcon width="2rem"/>
      <ReactIcon width={"2.2rem"}/>
      <MaterialUIIcon width={"2.5rem"}/>
      <ChartsJSIcon width={"2.5rem"}/>
    </div>
  </div>
)

export default SalesTools