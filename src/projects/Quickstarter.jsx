import dupPortError from "../assets/quickstarter/dupPortError.png"
import enterMicros from "../assets/quickstarter/enterMicros.png"
import enterQueues from "../assets/quickstarter/enterQueues.png"
import portAndPollerPrompt from "../assets/quickstarter/portAndPollerPrompt.png"
import portNumberError from "../assets/quickstarter/portNumberError.png"
import startProject from "../assets/quickstarter/startProject.png"
import viteSetup from "../assets/quickstarter/viteSetup.png"
import volumeAndPort from "../assets/quickstarter/volumeAndPort.png"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"


export default function Quickstarter() {

  const navigate = useNavigate()

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

            {/* <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}> */}
            <div style={{
              ...startProjectStyle,
              "backgroundImage": `url(${startProject})`,
              "width": "20%",

            }}/>
            <div style={{
              ...volumeAndPortStyle,
              "backgroundImage": `url(${volumeAndPort})`,
              "width": "40%"

            }}/>
            <div style={{
              ...portNumberErrorStyle,
              "backgroundImage": `url(${portNumberError})`,
              "width": "40%"

            }}/>
            <div style={{
              ...enterMicrosStyle,
              "backgroundImage": `url(${enterMicros})`,
              "width": "40%"

            }}/>
            <div style={{
              ...dupPortErrorStyle,
              "backgroundImage": `url(${dupPortError})`,
              "width": "40%"

            }}/>
            <div style={{
              ...enterQueuesStyle,
              "backgroundImage": `url(${enterQueues})`,
              "width": "40%"

            }}/>
            <div style={{
              ...portAndPollerPromptStyle,
              "backgroundImage": `url(${portAndPollerPrompt})`,
              "width": "40%"

            }}/>
            <div style={{
              ...viteSetupStyle,
              "backgroundImage": `url(${viteSetup})`,
              "width": "40%"

            }}/>
          {/* </div> */}
        </div>
      </motion.div>
    )
}