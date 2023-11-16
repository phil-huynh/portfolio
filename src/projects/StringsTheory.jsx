import twoChordsMapScales from "../assets/strings_theory/twoChordsMapScales.png"
import capo from "../assets/strings_theory/capo.png"
import alterations from "../assets/strings_theory/alterations.png"
import chord1DegsMapScales from "../assets/strings_theory/chord1DegsMapScales.png"
import chord2DegsMapScales from "../assets/strings_theory/chord2DegsMapScales.png"
import focus1MapChords from "../assets/strings_theory/focus1MapChords.png"
import focus2DegsMapChords from "../assets/strings_theory/focus2DegsMapChords.png"
import focusChord1MapScales from "../assets/strings_theory/focusChord1MapScales.png"
import focusChord2MapScales from "../assets/strings_theory/focusChord2MapScales.png"
import leftHanded from "../assets/strings_theory/leftHanded.png"
import mapScalesPage from "../assets/strings_theory/mapScalesPage.png"
import oneChordInMapScales from "../assets/strings_theory/oneChordInMapScales.png"
import sectionNeck from "../assets/strings_theory/sectionNeck.png"


import standardNeck from "../assets/strings_theory/standardNeck.png"
import ukeNeck from "../assets/strings_theory/ukeNeck.png"
import fiveStringNeck from "../assets/strings_theory/fiveStringNeck.png"
import violinNeck from "../assets/strings_theory/violinNeck.png"
import leftyNeck from "../assets/strings_theory/leftyNeck.png"

import selectedNoteNoChord from "../assets/strings_theory/selectedNoteNoChord.png"
import selectedNoteWithChord from "../assets/strings_theory/selectedNoteWithChord.png"
import selectedNoteTwoChords from "../assets/strings_theory/selectedNoteTwoChords.png"


import scalesMenu from "../assets/strings_theory/scalesMenu.png"
import tuningMenu from "../assets/strings_theory/tuningMenu.png"
import tonicMenu from "../assets/strings_theory/tonicMenu.png"
import viewMenu from "../assets/strings_theory/viewMenu.png"
import scaleDegrees from "../assets/strings_theory/scaleDegrees.png"
import solfege from "../assets/strings_theory/solfege.png"
import twoNamesMapChords from "../assets/strings_theory/twoNamesMapChords.png"
import noteNames from "../assets/strings_theory/noteNames.png"
import topDash from "../assets/strings_theory/topDash.png"
import scalesDash from "../assets/strings_theory/scalesDash.png"
import chordDash from "../assets/strings_theory/chordDash.png"

import JavascriptIcon from '../tech_icons/JavascriptIcon'
import CSSLogo from '../tech_icons/CSS_Logo'
import NodeIcon from '../tech_icons/NodeIcon'
import ExpressIcon from '../tech_icons/ExpressIcon'
import WebpackIcon from '../tech_icons/Webpack'
import EC2Icon from '../tech_icons/EC2Icon'
import Route53Icon from '../tech_icons/Route53Icon'
import JestIcon from '../tech_icons/JestIcon'
import ReactIcon from '../tech_icons/ReactIcon'
import BabelIcon from '../tech_icons/BabelIcon'


import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"
import { useStore } from "../Store"


export default function StringsTheory() {

  const {locate, locate2, locate3} = useStore()
  // const wrapperStyle = {
  //   "height": "100vh",
  //   "backgroundImage": background
  // }

  const images = [
    // mapScalesPage,
    // selectedNoteNoChord,
    // selectedNoteWithChord,
    // oneChordInMapScales,
    twoChordsMapScales,
    focusChord1MapScales,
    focusChord2MapScales,
    chord1DegsMapScales,
    chord2DegsMapScales,
    // capo,
    // sectionNeck,
    // leftHanded,
    alterations,
    twoNamesMapChords,
    focus1MapChords,
    focus2DegsMapChords,
  ]

  const navigate = useNavigate()

  const headerStyle = {
    "width": "45%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }

  const titleStyle = {
    ...headerStyle,
    "width": "80%",
    "marginBottom": "2rem",
    "marginTop": "6rem"
  }

  const toolBoxStyle ={
    "width": "80%",
    "marginBottom": "1rem"

  }

  const toolsStyle = {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "flexWrap": "wrap",
    "gap": ".5rem",
    "paddingBottom": "1rem",
    "paddingInline": ".5rem",
  }

  const infoBoxStyle = {
    "width": "78%",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "padding": "1rem",

  }

  const photoStyle = {
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "margin": "1rem",
  }

  const imageStyle = {
    ...photoStyle,
    "width": "90%",
    "aspectRatio": "6.75/4"
  }

  const selectedNoteStyle = {
    ...photoStyle,
    "width": "100%",
    "aspectRatio": "2.43"
  }

  const neckStyle = {
    ...photoStyle,
    "width": "90%",
    "aspectRatio": "5.74"
  }

  const topDashStyle = {
    ...photoStyle,
    "width": "90%",
    "aspectRatio": "12.62"
  }

  const scalesDashStyle = {
    ...photoStyle,
    "width": "90%",
    "aspectRatio": "5.6"
  }

  const chordDashStyle = {
    ...photoStyle,
    "width": "90%",
    "aspectRatio": "1.89"
  }

  const viewMenuStyle = {
    ...photoStyle,
    "width": "50%",
    "aspectRatio": "2.79"
  }

  const tonicMenuStyle = {
    ...photoStyle,
    "width": "30%",
    "aspectRatio": ".29"
  }

  const scalesMenuStyle = {
    ...photoStyle,
    "width": "50%",
    "aspectRatio": ".56"
  }

  const tuningMenuStyle = {
    ...photoStyle,
    "width": "50%",
    "aspectRatio": ".68"
  }

  const neckOptionsStyle1 = {
    ...photoStyle,
    "width": "90%",
    "aspectRatio": "5.45"
  }

  const neckOptionsStyle2 = {
    ...neckOptionsStyle1,
    "aspectRatio": "5.52"

  }

  const centerCol = {
    "display": "flex",
    "justifyContent": "center"
  }

  const introStyle = {
    "width": "100%",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "2rem",
  }

  const groupStyle = {
    "width": "75%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "padding": "2rem"
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
      <div className="glass" style={{...headerStyle, "position": "fixed", "zIndex": "11"}}>
        <h2 style={{"cursor": 'pointer'}} onClick={()=>navigate('/')}>Home</h2>
      </div>
      <div className="contents" >

        <div style={{...introStyle}}>
          <div className="strings-title-glass" style={titleStyle}>
            <h1 className="strings-title" style={{"color": "white", "fontSize": "6.5rem"}}>Strings Theory</h1>
          </div>
          <div className="glass" style={{...toolBoxStyle}}>
            <h2>Strings Theory was created using</h2>
            <div style={toolsStyle}>
              <JavascriptIcon width={"2rem"}/>
              <ReactIcon width={"2.5rem"}/>
              <CSSLogo width={"2.5rem"}/>
              <NodeIcon width={"5rem"} height={"2.5rem"}/>
              <ExpressIcon width={"4rem"} height={"2.5rem"}/>
              <BabelIcon width={"3.7rem"} height={"2.5rem"}/>
              <WebpackIcon width={"7rem"} height={"2.5rem"}/>
              <JestIcon width={"2rem"}/>
              <EC2Icon width={"2rem"} height={"2.5rem"}/>
              <Route53Icon width={"2.2rem"} height={"2.5rem"}/>
            </div>
          </div>
          <div className="glass" style={{...infoBoxStyle}} >
            <h2 style={{"marginBottom": "0"}}>View the deployed application here</h2>
            <a href="http://stringstheory.net">
              <h2 style={{"cursor": 'pointer', "color": "white"}}>stringstheory.net</h2>
            </a>
          </div>

          {/* <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{"display": "flex", "justifyContent": "space-around"}}
            >
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{"display": "flex", "justifyContent": "space-around"}}
            >
            </Grid>
          </Grid> */}


        </div>
        <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}>
          <div className="glass" style={infoBoxStyle}>
            <div style={groupStyle}>
              <div style={{...imageStyle, "backgroundImage": `url(${mapScalesPage})`}} />
              <div style={{...imageStyle, "backgroundImage": `url(${leftHanded})`}} />
            </div>
            <div style={{...topDashStyle, "backgroundImage": `url(${topDash})`}}></div>
            <div style={{...scalesDashStyle, "backgroundImage": `url(${scalesDash})`}}></div>
            <div style={{...chordDashStyle, "backgroundImage": `url(${chordDash})`}}></div>
            <div style={{...neckStyle, "backgroundImage": `url(${noteNames})`}}></div>
            <div style={{...neckStyle, "backgroundImage": `url(${scaleDegrees})`}}></div>
            <div style={{...neckStyle, "backgroundImage": `url(${solfege})`}}></div>
            <div style={{...neckOptionsStyle1, "backgroundImage": `url(${standardNeck})`}}></div>
            <div style={{...neckOptionsStyle1, "backgroundImage": `url(${fiveStringNeck})`}}></div>
            <div style={{...neckOptionsStyle1, "backgroundImage": `url(${ukeNeck})`}}></div>
            <div style={{...neckOptionsStyle2, "backgroundImage": `url(${violinNeck})`}}></div>
            <div style={{...neckOptionsStyle2, "backgroundImage": `url(${leftyNeck})`}}></div>
          </div>
          <div className="glass3" style={infoBoxStyle}>
            <div style={{...viewMenuStyle, "backgroundImage": `url(${viewMenu})`}} />
            <div style={{...tuningMenuStyle, "backgroundImage": `url(${tuningMenu})`}} />
            <div style={{...tonicMenuStyle, "backgroundImage": `url(${tonicMenu})`}} />
            <div style={{...scalesMenuStyle, "backgroundImage": `url(${scalesMenu})`}} />
            <div style={{...selectedNoteStyle, "backgroundImage": `url(${selectedNoteNoChord})`}} />
            <div style={{...selectedNoteStyle, "backgroundImage": `url(${selectedNoteWithChord})`}}></div>
            <div style={{...selectedNoteStyle, "backgroundImage": `url(${selectedNoteTwoChords})`}}></div>
          </div>
          <div className="glass4" style={infoBoxStyle}>
            <div style={{...imageStyle, "backgroundImage": `url(${oneChordInMapScales})`}} />
            <div style={{...imageStyle, "backgroundImage": `url(${sectionNeck})`}}></div>
            <div style={{...imageStyle, "backgroundImage": `url(${capo})`}}></div>
          </div>
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

