import BashIcon from "../../tech_icons/BashIcon"
import PythonIcon from "../../tech_icons/PythonIcon"
import DockerIcon from "../../tech_icons/DockerIcon"
import RabbitMQIcon from "../../tech_icons/RabbitMQIcon"
import ViteIcon from "../../tech_icons/ViteIcon"
import DjangoIcon from "../../tech_icons/DjangoIcon"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useStore } from "../../Store"
import Photo from "../../Photo"
import styles from "./Quickstarter.module.css"

export default function Quickstarter() {

  const navigate = useNavigate()

  const { quickstarterPhotos: photos} = useStore()

  const headerStyle = {
    height: "5rem",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  const imageStyle ={
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "1rem",
    border: "6px solid #0E0E0E",
    borderRadius: "10px"
  }

  const imgBorder = {
    border: "6px solid #0E0E0E",
    borderRadius: "10px"
  }

  const toolBoxStyle ={
    width: "80%",
    marginBottom: "1rem",
    marginTop: "1rem",
    paddingTop: ".3rem",
  }

  const toolsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: ".5rem",
    paddingBottom: "1rem",
    paddingInline: ".5rem",
  }

  const titleStyle = {
    marginTop: "8rem",
    zIndex: "10"
  }

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: .2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: .2 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.colorfilter}></div>
        <div className="glass" style={{...headerStyle, "position": "fixed", "zIndex": "11"}}>
          <h2 style={{"cursor": 'pointer'}} onClick={()=>navigate('/')}>Home</h2>
        </div>
        <div className="contents">
          <div className="glass" style={{...headerStyle, ...titleStyle}}>
            <h1 style={{"color": "white"}}>Quickstarter</h1>
          </div>
          <div className="glass" style={{...toolBoxStyle}}>
            <h2>Quickstarter uses</h2>
            <div style={toolsStyle}>
              <BashIcon width={"3rem"}/>
              <PythonIcon width={"3rem"}/>
              <DockerIcon width={"2.8rem"} height={"3.5rem"}/>
              <RabbitMQIcon width={"4rem"} height={"3.5rem"}/>
              <ViteIcon />
              <DjangoIcon width={"4rem"} height={"3.5rem"}/>
            </div>
          </div>
          <Photo
            image={photos.startProject.image}
            aspect={photos.startProject.aspect}
            width="20%"
            extras={imgBorder}
          />
          <Photo
            image={photos.volumeAndPort.image}
            aspect={photos.volumeAndPort.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.portNumberError.image}
            aspect={photos.portNumberError.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.enterMicros.image}
            aspect={photos.enterMicros.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.dupPortError.image}
            aspect={photos.dupPortError.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.enterQueues.image}
            aspect={photos.enterQueues.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.portAndPollerPrompt.image}
            aspect={photos.portAndPollerPrompt.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.viteSetup.image}
            aspect={photos.viteSetup.aspect}
            width="40%"
            extras={imgBorder}
          />
      </div>
    </motion.div>
  )
}