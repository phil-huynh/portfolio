import BashIcon from "../../tech_icons/BashIcon"
import PythonIcon from "../../tech_icons/PythonIcon"
import DockerIcon from "../../tech_icons/DockerIcon"
import RabbitMQIcon from "../../tech_icons/RabbitMQIcon"
import ViteIcon from "../../tech_icons/ViteIcon"
import DjangoIcon from "../../tech_icons/DjangoIcon"
import styles from "./Quickstarter.module.css"


const QuickstarterTools = () => (
  <div className={`glass ${styles.toolBox}`}>
    <h2>Quickstarter uses</h2>
    <div className={styles.tools}>
      <BashIcon width={"3rem"}/>
      <PythonIcon width={"3rem"}/>
      <DockerIcon width={"2.8rem"}/>
      <RabbitMQIcon width={"4rem"}/>
      <ViteIcon />
      <DjangoIcon width={"4rem"}/>
    </div>
  </div>
)

export default QuickstarterTools