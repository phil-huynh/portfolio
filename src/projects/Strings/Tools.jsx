import JavascriptIcon from '../../tech_icons/JavascriptIcon'
import CSSLogo from '../../tech_icons/CSS_Logo'
import NodeIcon from '../../tech_icons/NodeIcon'
import ExpressIcon from '../../tech_icons/ExpressIcon'
import WebpackIcon from '../../tech_icons/Webpack'
import EC2Icon from '../../tech_icons/EC2Icon'
import Route53Icon from '../../tech_icons/Route53Icon'
import JestIcon from '../../tech_icons/JestIcon'
import ReactIcon from '../../tech_icons/ReactIcon'
import BabelIcon from '../../tech_icons/BabelIcon'
import styles from "./Strings.module.css"


export default function Tools () {
  return (
    <div className={`glass ${styles.toolBox}`}>
      <h2>Strings Theory was created using</h2>
      <div className={styles.tools}>
        <JavascriptIcon width={"2rem"}/>
        <ReactIcon width={"2.5rem"}/>
        <CSSLogo width={"2.5rem"}/>
        <NodeIcon width={"6rem"}/>
        <ExpressIcon width={"6rem"}/>
        <BabelIcon width={"3.7rem"}/>
        <WebpackIcon width={"7rem"}/>
        <JestIcon width={"2rem"}/>
        <EC2Icon width={"2rem"}/>
        <Route53Icon width={"2.2rem"}/>
      </div>
    </div>
  )
}