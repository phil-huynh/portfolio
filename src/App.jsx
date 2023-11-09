// import { useState } from 'react'
import TechIcons from './TechIcons'
import githubLogo from './assets/tech_icons/github.svg'
import gitlabLogo from './assets/tech_icons/gitlab.svg'
import './App.css'

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
    <div>
    <div style={{ "height": "100vh", "width": "100%", "display": "flex", "justifyContent": "space-around"}}>
      <TechIcons/>
      <section style={{"display": "flex", "alignItems": "center", "width": "45%", "justifyContent": "center"}}>
        <div>
          <h1>Phil Huynh</h1>
          <section style={iconSectionStyle}>
            <a href="https://github.com/phil-huynh">
              <div style={{...iconStyle, "width": '5rem'}}>
                <img src={githubLogo}></img>
              </div>
            </a>
            <a href='http://www.gitlab.com/PhilHuynh'>
              <div style={{...iconStyle, "width": '5rem'}}>
                  <img src={gitlabLogo}></img>
              </div>
            </a>
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
