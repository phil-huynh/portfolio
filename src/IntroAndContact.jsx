import { motion } from "framer-motion"
import headshot from "./assets/info/headshot.png"
import GitHubIcon from "./tech_icons/GitHubIcon"
import GitLabIcon from "./tech_icons/GitLabIcon"
import LinkedInIcon from "./tech_icons/LinkedInIcon"
import Grid from '@mui/material/Grid';
import { useStore }  from "./Store"


export default function IntroAndContact() {


  const { locate, locate2, locate3 } = useStore()
  // const locate = { "border": "red 1px solid" }
  // const locate2 = { "border": "blue 1px solid" }
  // const locate3 = { "border": "yellow 1px solid" }

  const iconSectionStyle = {
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "2rem",
    // "marginTop": "1rem",
    // "padding": "1rem"
    // "justifyContent": "center"
  }


  const headshotStyle = {
    "width": "28.2rem",
    "height": "24rem",
    "overflow": "hidden",
    "backgroundImage": `url(${headshot})`,
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "borderRadius": "25px",
    // "border": "1px inset black",
    "margin": "2rem",
    "marginY": "3rem"
  }

  const containerStyle = {
    "display": "flex",
    "width": "93%",
    "alignItems": "center",
    "marginTop": "2rem",
    "flexDirection": "column"

  }


  const labelsStyle = {
    "display": "flex",
    "alignItems": "flex-start",
    "alignContent": "flex-end",
    // "paddingLeft": "1rem",
  }

  const gridStyle = {
    "display": "flex",
    "justifyContent": "flex-start",
  }

  const gridStyle2 = {
    "display": "flex",
    "justifyContent": "flex-end",
  }

  const infoStyle={
    "margin": "2rem"
  }

  const menuItemStyle = {
    "fontSize": "1.5rem",
    "width": "100%",
    "marginTop": "1.5rem",
    // "paddingTop": "1rem",
    // "paddingBottom": "1rem"
  }


  return (
    <motion.section
      className="intro-container"
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5, delay: .5 }}
      style={{...containerStyle}}
    >
      <div className="glass" style={{"width": "100%"}}>
        <Grid container sx={{"width": "100%"}}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{...gridStyle}}>
              <div style={{...headshotStyle}}/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{...gridStyle}}>
            <div className={infoStyle} style={{"height": "100%", "margin": "2rem"}}>
              <h1 style={{...labelsStyle, "margin": "0", "fontSize": "2.3rem"}} className="text-shadow">Phil Huynh</h1>
              <h2 style={{...labelsStyle, "margin": "0"}} className="text-shadow">Full Stack Engineer</h2>
              <a href="mailto:philiphuynh98@gmail.com" style={{"color": "white"}}>
                <h4 className="text-shadow" style={{"textAlign": "left"}}>philphuynh98@gmail.com</h4>
              </a>
              <section className="extra-shadow" style={iconSectionStyle}>
                <a href="https://www.linkedin.com/in/phil-huynh-38472249/"><LinkedInIcon/></a>
                <a href="https://github.com/phil-huynh"><GitHubIcon/></a>
                <a href="http://www.gitlab.com/PhilHuynh"><GitLabIcon/></a>
              </section>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="glass" style={menuItemStyle}><h1>Skills</h1></div>
      <div className="glass" style={menuItemStyle}><h1>Resume & Bio</h1></div>
      <div className="glass" style={menuItemStyle}><h1>Projects</h1></div>
      <div className="glass" style={menuItemStyle}><h1>Recommendations</h1></div>
  </motion.section>
  )
}