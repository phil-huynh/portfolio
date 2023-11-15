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
import { Grid } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"


export default function StringsTheory() {

  // const wrapperStyle = {
  //   "height": "100vh",
  //   "backgroundImage": background
  // }

  const images = [
    mapScalesPage,
    selectedNoteNoChord,
    selectedNoteWithChord,
    oneChordInMapScales,
    twoChordsMapScales,
    focusChord1MapScales,
    focusChord2MapScales,
    chord1DegsMapScales,
    chord2DegsMapScales,
    capo,
    sectionNeck,
    leftHanded,
    alterations,
    scaleChoices,
    instrumentsAndTunings,
    twoNamesMapChords,
    focus1MapChords,
    focus2DegsMapChords,
  ]

  const navigate = useNavigate()

  const headerStyle = {
    "height": "5rem",
    "width": "45%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }

  const imageStyle = {
    "backgroundSize": "cover",
    "width": "95%",
    "margin": "1rem",
    "aspectRatio": "6.75/4"
  }

  const imageStyle2 = {
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "width": "90rem",
    "height": "17.5rem",
    "margin": "1rem"
  }

  return (
    <motion.div
      className="strings-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="strings-overlay"></div>
      <div className="contents">
        <div style={{ "display": "flex", "alignItems": "center", "flexDirection": "column"}}>
          <div className="glass" style={headerStyle}>
            <h1 style={{"color": "white"}}>Hello World: Strings Theory</h1>
          </div>
          <div className="glass" style={headerStyle}>
            <h2 style={{"cursor": 'pointer'}} onClick={()=>navigate('/')}>Home</h2>
          </div>
          <div className="glass2" style={{...headerStyle, "height": "50rem"}}>
            <h2>Test</h2>
            <h2>Test</h2>
          </div>
        </div>
        <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}>
          <div style={{...imageStyle2, "backgroundImage": `url(${scaleDegrees})`}}></div>
          <div style={{...imageStyle2, "backgroundImage": `url(${solfege})`}}></div>
          <Grid container>
          {images.map((image, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                key={`stringsImage${i}`}
              >
                <div style={{...imageStyle, "backgroundImage": `url(${image})`}} />
              </Grid>
          ))}
          </Grid>
        </div>
      </div>
    </motion.div>
  )
}

