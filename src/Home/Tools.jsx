import ViteIcon from "../tech_icons/ViteIcon"
import JavascriptIcon from "../tech_icons/JavascriptIcon"
import ReactIcon from "../tech_icons/ReactIcon"
import MaterialUIIcon from "../tech_icons/MaterialUIIcon"
import CSSLogo from "../tech_icons/CSS_Logo"
import FramerMotionIcon from "../tech_icons/FramerMotionIcon"
import AmplifyIcon from "../tech_icons/Amplify"
import Route53Icon from "../tech_icons/Route53Icon"
import styles from "./Home.module.css"

const HomeTools = () => (
  <div className={`glass ${styles.toolBox}`}>
    <h3>This site was created with</h3>
    <div className={styles.tools}>
      <JavascriptIcon width={"2rem"}/>
      <ReactIcon width={"2.5rem"}/>
      <CSSLogo width={"2.5rem"}/>
      <FramerMotionIcon width={"2rem"}/>
      <MaterialUIIcon width={"2.5rem"}/>
      <ViteIcon/>
      <AmplifyIcon width={"2rem"} />
      <Route53Icon width={"2.2rem"} />
    </div>
  </div>
)

export default HomeTools