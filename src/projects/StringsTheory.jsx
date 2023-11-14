import twoChordsMapScales from "../assets/strings_theory/twoChordsMapScales.png"
import capo from "../assets/strings_theory/capo.png"
import selectedNoteNoChord from "../assets/strings_theory/selectedNoteNoChord.png"
import alterations from "../assets/strings_theory/alterations.png"
import chord1DegsMapScales from "../assets/strings_theory/chord1DegsMapScales.png"
import chord2DegsMapScales from "../assets/strings_theory/chord2DegsMapScales.png"
import focus1MapChords from "../assets/strings_theory/focus1MapChords.png"
import focus2DegsMapChords from "../assets/strings_theory/focus2DegsMapChords.png"
import focusChord1MapScales from "../assets/strings_theory/focusChord1MapScales.png"
import focusChord2MapScales from "../assets/strings_theory/focusChord2MapScales.png"
import instrumentsAndTunings from "../assets/strings_theory/instrumentsAndTunings.png"
import leftHanded from "../assets/strings_theory/leftHanded.png"
import mapScalesPage from "../assets/strings_theory/mapScalesPage.png"
import oneChordInMapScales from "../assets/strings_theory/oneChordInMapScales.png"
import scaleChoices from "../assets/strings_theory/scaleChoices.png"
import scaleDegrees from "../assets/strings_theory/scaleDegrees.png"
import sectionNeck from "../assets/strings_theory/sectionNeck.png"
import selectedNoteWithChord from "../assets/strings_theory/selectedNoteWithChord.png"
import solfege from "../assets/strings_theory/solfege.png"
import twoNamesMapChords from "../assets/strings_theory/twoNamesMapChords.png"
import { useNavigate } from "react-router-dom"

export default function StringsTheory() {

  // const wrapperStyle = {
  //   "height": "100vh",
  //   "backgroundImage": background
  // }

  const navigate = useNavigate()

  const headerStyle = {
    "height": "5rem",
    "width": "50%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }

  const imageStyle = {
    "backgroundSize": "cover",
    "width": "29.8rem",
    "height": "18.2rem",
    "margin": "1rem"
  }

  const imageStyle2 = {
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "width": "90rem",
    "height": "17.5rem",
    "margin": "1rem"
  }

  return (
    <div className="strings-wrapper">
      <div className="strings-overlay"></div>
      <div className="contents">
        <div style={{ "display": "flex", "alignItems": "center", "flexDirection": "column"}}>
          <div className="glass" style={headerStyle}>
            <h1 style={{"color": "white"}}>Hello World: Strings Theory</h1>
          </div>
          <div className="glass" style={headerStyle}>
            <h2 style={{"cursor": 'pointer'}} onClick={()=>navigate('/')}>Home</h2>
          </div>
        </div>
        <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}>
          <div style={{...imageStyle2, "backgroundImage": `url(${scaleDegrees})`}}></div>
          <div style={{...imageStyle2, "backgroundImage": `url(${solfege})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${mapScalesPage})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${selectedNoteNoChord})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${selectedNoteWithChord})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${oneChordInMapScales})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${twoChordsMapScales})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${focusChord1MapScales})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${focusChord2MapScales})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${chord1DegsMapScales})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${chord2DegsMapScales})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${capo})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${sectionNeck})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${leftHanded})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${alterations})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${scaleChoices})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${instrumentsAndTunings})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${twoNamesMapChords})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${focus1MapChords})`}}></div>
          <div style={{...imageStyle, "backgroundImage": `url(${focus2DegsMapChords})`}}></div>

        </div>
      </div>
    </div>
  )
}

