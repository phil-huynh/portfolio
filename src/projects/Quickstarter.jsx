import BashIcon from "../tech_icons/BashIcon"
import PythonIcon from "../tech_icons/PythonIcon"
import DockerIcon from "../tech_icons/DockerIcon"
import RabbitMQIcon from "../tech_icons/RabbitMQIcon"
import ViteIcon from "../tech_icons/ViteIcon"
import DjangoIcon from "../tech_icons/DjangoIcon"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useStore } from "../Store"


export default function Quickstarter() {

  const navigate = useNavigate()

  const { quickstarterPhotos: photos} = useStore()

  const headerStyle = {
    "height": "5rem",
    "width": "50%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }

  const imageStyle ={
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "margin": "1rem",
    "border": "6px solid #0E0E0E",
    "borderRadius": "10px"
  }

  const toolBoxStyle ={
    "width": "80%",
    "marginBottom": "1rem",
    "marginTop": "1rem",
    "paddingTop": ".3rem",
  }

  const toolsStyle = {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "flexWrap": "wrap",
    "gap": ".5rem",
    "paddingBottom": "1rem",
    "paddingInline": ".5rem",
  }

  const titleStyle = {
    "marginTop": "8rem",
    "zIndex": "10"
  }

  const dupPortErrorStyle = {
    ...imageStyle,
    "aspectRatio": "2.35"
  }

  const enterMicrosStyle = {
    ...imageStyle,
    "aspectRatio": ".51"
  }

  const enterQueuesStyle = {
    ...imageStyle,
    "aspectRatio": "1.56"
  }

  const portAndPollerPromptStyle = {
    ...imageStyle,
    "aspectRatio": "1.33"
  }

  const portNumberErrorStyle = {
    ...imageStyle,
    "aspectRatio": "2.13"
  }

  const startProjectStyle = {
    ...imageStyle,
    "aspectRatio": "10"
  }

  const viteSetupStyle = {
    ...imageStyle,
    "aspectRatio": "2.64"
  }

  const volumeAndPortStyle = {
    ...imageStyle,
    "aspectRatio": "4.78"
  }


  return (
    <motion.div
      className="quickstarter-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="quickstarter-overlay"></div>
      <div className="colorfilter"></div>
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

          {/* <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}> */}
          <div style={{
            ...startProjectStyle,
            "backgroundImage": `url(${photos.startProject})`,
            "width": "20%",

          }}/>
          <div style={{
            ...volumeAndPortStyle,
            "backgroundImage": `url(${photos.volumeAndPort})`,
            "width": "40%"

          }}/>
          <div style={{
            ...portNumberErrorStyle,
            "backgroundImage": `url(${photos.portNumberError})`,
            "width": "40%"

          }}/>
          <div style={{
            ...enterMicrosStyle,
            "backgroundImage": `url(${photos.enterMicros})`,
            "width": "40%"

          }}/>
          <div style={{
            ...dupPortErrorStyle,
            "backgroundImage": `url(${photos.dupPortError})`,
            "width": "40%"

          }}/>
          <div style={{
            ...enterQueuesStyle,
            "backgroundImage": `url(${photos.enterQueues})`,
            "width": "40%"

          }}/>
          <div style={{
            ...portAndPollerPromptStyle,
            "backgroundImage": `url(${photos.portAndPollerPrompt})`,
            "width": "40%"

          }}/>
          <div style={{
            ...viteSetupStyle,
            "backgroundImage": `url(${photos.viteSetup})`,
            "width": "40%"

          }}/>
        {/* </div> */}
      </div>
    </motion.div>
  )
}