import JavascriptIcon from "../../tech_icons/JavascriptIcon"
import ReactIcon from "../../tech_icons/ReactIcon"
import NodeIcon from "../../tech_icons/NodeIcon"
import ExpressIcon from "../../tech_icons/ExpressIcon"
import PostgresIcon from '../../tech_icons/PostgresIcon'
import CSSLogo from "../../tech_icons/CSS_Logo"
import EC2Icon from '../../tech_icons/EC2Icon'
import NGNIXIcon from '../../tech_icons/NGNIXIcon'


import styles from "./Ecom.module.css"


const EcomTools = () => (
  <div className={`glass ${styles.toolBox}`}>
    <h2>Ecom uses</h2>
    <div className={styles.tools}>
      <JavascriptIcon width="2rem"/>
      <ReactIcon width={"2.2rem"}/>
      <NodeIcon width={"5.5rem"}/>
      <ExpressIcon width={"5.5rem"}/>
      <NGNIXIcon width={"4rem"}/>
      <EC2Icon width={"2rem"}/>
      <PostgresIcon width={"3rem"}/>
      <CSSLogo width={"2.5rem"}/>
    </div>
  </div>
)

export default EcomTools