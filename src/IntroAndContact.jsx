import headshot from "./assets/info/headshot.png"
import GitHubIcon from "./tech_icons/GitHubIcon"
import GitLabIcon from "./tech_icons/GitLabIcon"
import LinkedInIcon from "./tech_icons/LinkedInIcon"
import Grid from '@mui/material/Grid';
import ViteIcon from "./tech_icons/ViteIcon"
import JavascriptIcon from "./tech_icons/JavascriptIcon"
import ReactIcon from "./tech_icons/ReactIcon"
import MaterialUIIcon from "./tech_icons/MaterialUIIcon"
import CSSLogo from "./tech_icons/CSS_Logo"
import FramerMotionIcon from "./tech_icons/FramerMotionIcon"
import AmplifyIcon from "./tech_icons/Amplify"
import Route53Icon from "./tech_icons/Route53Icon"
import { motion } from "framer-motion"
import { useStore }  from "./Store"

export default function IntroAndContact() {
  const { locate, locate2, locate3, firstTime, setSelection, setFirstTime, selection } = useStore()

  const iconSectionStyle = {
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "2rem",
  }

  const headshotStyle = {
    "width": "95%",
    "aspectRatio": "5.5/4.7",
    "overflow": "hidden",
    "backgroundImage": `url(${headshot})`,
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "borderRadius": "25px",
    "margin": "2rem",
    "marginY": "3rem"
  }

  const containerStyle = {
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "flexDirection": "column",
    "zIndex": "2"
  }

  const labelsStyle = {
    "display": "flex",
    "alignItems": "flex-start",
    "alignContent": "flex-end",
  }

  const gridStyle = {
    "display": "flex",
    "justifyContent": "flex-start",
  }

  const infoStyle={
    "margin": "2rem"
  }

  const menuItemStyle = {
    "fontSize": "1rem",
    "width": "100%",
    height: "25%",
    "marginTop": ".5rem",
    cursor: "pointer",
    "display": "flex",
    "justifyContent": "center",
    alignItems: "center"
  }

  const skillsBoxStyle = {
    "fontSize": "1rem",
    "width": "100%",
    "marginTop": "1.5rem",
    cursor: "pointer",
    paddingInline: ".2rem"
  }

  const selectedStyle = {
    ...menuItemStyle,
    boxShadow: "0 0 .2rem #fff, \
              0 0 .2rem #fff,\
              0 0 0.5rem white,\
              0 0 0.2rem white,\
              0 0 1rem white,\
              inset 0 0 1rem white"

  }

  const madeWithStyle = {
    "display": "flex",
    "justifyContent": "space-around",
    flexWrap: "wrap",
    "gap": "1.3rem",
    "paddingBottom": "1rem"
  }


  const buttonContainer = {
    // ...locate,
    height: "100%",
    width: "100%",
    "display": "flex",
    "alignItems": "center",
    justifyContent: "space-around",
    "marginTop": "2rem",
    "flexDirection": "column",
  }

  const transition = firstTime ? { duration: 1.5, delay: .8 } : { duration: 1 }


  const select = (selected) => {
    setFirstTime(false)
    setSelection(selected)
  }

  return (
    <motion.section
      className="intro-container"
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      transition={transition}
      style={{...containerStyle}}
    >
      <div className="glass" style={{"width": "100%"}}>
        <Grid container sx={{"width": "100%"}}>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={6} style={{...gridStyle}}>
              <div style={{...headshotStyle}}/>
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={6} style={{...gridStyle}}>
            <div className={infoStyle} style={{"height": "100%", "margin": "2rem"}}>
              <h1 style={{...labelsStyle, "margin": "0", "fontSize": "2.3rem"}} className="text-shadow">Phil Huynh</h1>
              <h2 style={{...labelsStyle, "margin": "0"}} className="text-shadow">Full Stack Engineer</h2>
              <a href="mailto:philiphuynh98@gmail.com" style={{"color": "white"}}>
                <h4 className="text-shadow" style={{"textAlign": "left"}}>philphuynh98@gmail.com</h4>
              </a>
              <section className="extra-shadow" style={iconSectionStyle}>
                <LinkedInIcon width={"2.5rem"}/>
                <GitHubIcon width={"2.5rem"}/>
                <GitLabIcon width={"2.5rem"}/>
              </section>
              <hr/>
              <p>
              It all rolls into one
              And nothing comes for free
              There's nothing you can hold
              For very long
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="glass" style={skillsBoxStyle}>
        <h3>This site was created with</h3>
        <div style={madeWithStyle}>
          <JavascriptIcon width={"2rem"}/>
          <ReactIcon width={"2.5rem"}/>
          <CSSLogo width={"2.5rem"}/>
          <FramerMotionIcon width={"2rem"}/>
          <MaterialUIIcon width={"2.5rem"}/>
          <ViteIcon/>
          <AmplifyIcon width={"2rem"} height={"2.5rem"} />
          <Route53Icon width={"2.2rem"} height={"2.5rem"} />
          {/* <AWSLogo width={"5rem"} height={"2.1rem"}/> */}
        </div>
      </div>
      <div style={buttonContainer}>
        <div
          className="glass"
          onClick={()=>select('skills')}
          style={selection === 'skills' ? selectedStyle : menuItemStyle}
        >
          <h2>Skills</h2>
        </div>
        <div
          className="glass"
          onClick={()=>select('bio')}
          style={selection === 'bio' ? selectedStyle : menuItemStyle}
        >
          <h2>Resume & Bio</h2>
        </div>
        <div
          className="glass"
          onClick={()=>select('projects')}
          style={selection === 'projects' ? selectedStyle : menuItemStyle}
        >
          <h2>Projects</h2>
        </div>
      </div>
      {/* <div className="glass" style={menuItemStyle}><h2>Recommendations</h2></div> */}
  </motion.section>
  )
}