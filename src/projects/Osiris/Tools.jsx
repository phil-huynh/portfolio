import JavascriptIcon from "../../tech_icons/JavascriptIcon"
import ReactIcon from "../../tech_icons/ReactIcon"
import NodeIcon from "../../tech_icons/NodeIcon"
import ExpressIcon from "../../tech_icons/ExpressIcon"
import MongoIcon from "../../tech_icons/MongoIcon"
import CSSLogo from "../../tech_icons/CSS_Logo"
import BootstrapIcon from "../../tech_icons/BootstrapIcon"

import styles from "./Osiris.module.css"


const OsirisTools = () => (
  <div className={`glass ${styles.toolBox}`}>
    <h2>Osiris uses</h2>
    <div className={styles.tools}>
      <JavascriptIcon width="2rem"/>
      <ReactIcon width={"2.2rem"}/>
      <NodeIcon width={"5.5rem"}/>
      <ExpressIcon width={"5.5rem"}/>
      <MongoIcon width={"3rem"}/>
      <CSSLogo width={"2.5rem"}/>
      <BootstrapIcon width={"2.5rem"}/>
    </div>
  </div>
)

export default OsirisTools