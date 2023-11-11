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
    "width": "13rem",
    "height": "13rem",
    "overflow": "hidden",
    "backgroundImage": `url(${headshot})`,
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "borderRadius": "25px",
    "border": "2px inset black",
    "margin": "1rem"
  }

  const containerStyle = {
    "display": "flex",
    // "alignItems": "center",
    // "flexDirection": "column",
    "width": "90%",
    // "padding": ".75rem",
    "justifyContent": "center"
  }


  const labelsStyle = {
    "display": "flex",
    "alignItems": "flex-start",
    "alignContent": "flex-end",
    // "paddingLeft": "1rem",
  }

  // const headerStyle = {
  //   "display": "flex",
  //   "justifyContent": "flex-start",

  // }

  const infoStyle={
    "margin": "2rem"
  }



  return (
    <motion.section
      className="glass intro-container, extra-shadow"
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5, delay: .5 }}
      style={{...containerStyle}}
    >
      <Grid container spacing={3} sx={{"width": "100vw"}}>
        <Grid item xs={6} sm={5} md={4} lg={6} xl={4}>
            <div style={{...headshotStyle}}/>
        </Grid>
        <Grid item xs={6} sm={7} md={8} lg={6} xl={8}>
           <div className={infoStyle} style={{"height": "100%", "marginTop": "2.2rem"}}>
            <h1 style={{...labelsStyle, "margin": "0"}} className="text-shadow">Phil Huynh</h1>
            <h4 style={{...labelsStyle, "margin": "0"}} className="text-shadow">Full Stack Engineer</h4>
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
  </motion.section>
  )
}