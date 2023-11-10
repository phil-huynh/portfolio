// import { useState } from "react"
import TechIcons from "./TechIcons"
import githubLogo from "./assets/tech_icons/github.svg"
import gitlabLogo from "./assets/tech_icons/gitlab.svg"
import headshot from "./assets/info/headshot.png"
import LinkedInIcon from "./tech_icons/LinkedInIcon"
import GitHubIcon from "./tech_icons/GitHubIcon"
import GitLabIcon from "./tech_icons/GitLabIcon"
import "./App.css"

function App() {

  const iconSectionStyle = {
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "3rem",
    "marginTop": "1rem"
  }

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }

  return (
    <div className="wrapper">
    <div className="overlay"></div>
    <div style={{ "height": "100vh", "width": "100%", "display": "flex", "justifyContent": "space-around", "overflowY": "auto", "overflowX": "hidden"}}>
      <TechIcons/>
      <section className="glass" style={{"display": "flex", "alignItems": "center", "width": "45%", "justifyContent": "center"}}>
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
      </section>
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
