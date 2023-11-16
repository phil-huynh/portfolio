import image1 from "../assets/quickstarter/addVolume.png"
import image2 from "../assets/quickstarter/portIntError.png"
import image3 from "../assets/quickstarter/microsCommandLine.png"
import image4 from "../assets/quickstarter/duplicatePortError.png"
import image5 from "../assets/quickstarter/addQueues.png"
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
      "backgroundImage": `url(${image1})`,
      "backgroundSize": "contain",
      "backgroundPosition": "center",
      "width": "29.8rem",
      "height": "18.2rem",
      "margin": "1rem"
    }

    const titleStyle = {
      "marginTop": "6rem"
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
              <h1 style={{"color": "white"}}>Hello World: Quickestarter</h1>
            </div>

            <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}>
            <div style={{
              ...imageStyle,
              "backgroundImage": `url(${image1})`,
            }}/>
            <div style={{
              ...imageStyle,
              "backgroundImage": `url(${image2})`,
              "height": "18.7rem",
            }}/>
            <div style={{
              ...imageStyle,
              "backgroundImage": `url(${image4})`,
              "width": "35rem",
            }}/>
            <div style={{
              ...imageStyle,
              "backgroundImage": `url(${image5})`,
              "width": "30.5rem",
            }}/>
            <div style={{
              ...imageStyle,
              "backgroundImage": `url(${image3})`,
              "width": "29rem",
              "height": "55rem",
            }}/>
          </div>
        </div>
      </motion.div>
    )
}