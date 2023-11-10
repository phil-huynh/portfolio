// import { useState } from "react"
import TechIcons from "./TechIcons"
import headshot from "./assets/info/headshot.png"
import LinkedInIcon from "./tech_icons/LinkedInIcon"
import GitHubIcon from "./tech_icons/GitHubIcon"
import GitLabIcon from "./tech_icons/GitLabIcon"
import { motion } from "framer-motion"
import "./App.css"

function App() {

  const iconSectionStyle = {
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "3rem",
    "marginTop": "1rem"
  }

  return (
    <div className="wrapper">
    <div className="overlay">
      <motion.h1 animate={{ fontSize: 0, opacity: 0 }} transition={{ duration: 1.5, delay: .6 }}>Greetings!</motion.h1>
    </div>
    <div style={{ "height": "100vh", "width": "100%", "display": "flex", "justifyContent": "space-around", "overflowY": "auto", "overflowX": "hidden"}}>
      <TechIcons/>
      <motion.section
        className="glass"
        initial={{ x: 1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, delay: .5 }}
        style={{
          "display": "flex",
          "alignItems": "center",
          "width": "45%",
          "justifyContent": "center"
        }}
      >
        <div>
          <img
            src={headshot}
            style={{
              "width": "25rem",
              "overflow": "hidden",
              "objectFit": "fit",
              "borderRadius": "25px",
              "border": "2px inset black"
            }}>
          </img>
          <h1 className="text-shadow name-header">Phil Huynh</h1>
          <h2 className="text-shadow">Full Stack Engineer</h2>
          <section className="extra-shadow" style={iconSectionStyle}>
            <a href="https://www.linkedin.com/in/phil-huynh-38472249/"><LinkedInIcon/></a>
            <a href="https://github.com/phil-huynh"><GitHubIcon/></a>
            <a href="http://www.gitlab.com/PhilHuynh"><GitLabIcon/></a>
          </section>
        </div>
      </motion.section>
    </div>
      <section>
        {/* <img src="https://media.giphy.com/media/H47rgIuBFw7g0iIG1V/giphy.gif"></img>
        <img src="https://media.giphy.com/media/9bPGXl6gGx4zeKXBXM/giphy.gif"></img>
        <img src="https://media.giphy.com/media/ovB7jDDERqLsZMzp7k/giphy.gif"></img> */}
      </section>
    </div>
  )
}

export default App
