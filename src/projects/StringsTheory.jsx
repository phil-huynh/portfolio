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
import GitHubIcon from '../tech_icons/GitHubIcon'

import Photo from "../Photo"

import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useStore } from "../Store"


export default function StringsTheory() {

  const {stringsPhotos: photos, locate, locate2, locate3} = useStore()

  const images = [
    photos.twoChordsMapScales,
    photos.focusChord1MapScales,
    photos.focusChord2MapScales,
    photos.chord1DegsMapScales,
    photos.chord2DegsMapScales,
    photos.alterations,
    photos.twoNamesMapChords,
    photos.focus1MapChords,
    photos.focus2DegsMapChords,
  ]

  const navigate = useNavigate()

  const headerStyle = {
    "width": "20%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "fixed",
    "zIndex": "11"
  }

  const titleStyle = {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "90%",

    "marginBottom": "2rem",
    "marginTop": "6rem",
  }

  const toolBoxStyle ={
    "width": "90%",
    "marginBottom": "1rem",
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
    "width": "85%",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "padding": "1rem",
    "marginTop": "1rem",
    "marginBottom": "1rem",
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

  const linkButtonsContainer = {
    "width": "90%",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-around"
  }

  const buttonStyle = {
    "width": "40%",
    "color": "white",
    "cursor": "pointer"

  }

  const navigation = [
    {label: "Home", path: "/"},
    {label: "Quickstarter", path: "/quickstarter"},
    {label: "Osiris", path: "/osiris"},
    {label: "e Commerce", path: "/ecommerce"},
  ]

  return (
    <motion.div
      className="strings-wrapper"
      initial={{ opacity: .2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: .2 }}
      transition={{ duration: 1 }}
    >
      <div className="strings-overlay"></div>
      <div className="contents" >

        <div style={{...introStyle}}>
          <div className="strings-title-glass " style={titleStyle}>
            <h1 className="strings-title" style={{"color": "white", "fontSize": "7rem",}}>Strings Theory</h1>
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

              {/* <div style={{...linkButtonsContainer}} > */}

              <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                  <button className='glass strings-link-button' onClick={()=>window.location.assign("http://stringstheory.net")}>
                    <p style={{"fontSize": "2rem","marginBottom": "0"}}>Click here to view the live app</p>
                    <a href="http://stringstheory.net">
                      <h2 style={{"color": "white"}}>http://stringstheory.net</h2>
                    </a>
                  </button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <button className='glass strings-link-button' onClick={()=>window.location.assign("https://github.com/phil-huynh/mvp")}>
                    <span style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
                      <span style={{"fontSize": "2rem", "marginRight": "1rem"}}>
                        View the code on
                      </span>
                      <GitHubIcon width={"3.5rem"} path="mvp"/>
                    </span>
                  </button>
                </Grid>
              </Grid>



              {/* </div> */}

        </div>

        <div style={{"position": "sticky", "top": "1rem", "display": "flex", "flexDirection": "row", "zIndex": "11"}}>

          <Grid container>
            {navigation.map(nav => (
              <Grid item xs={6} sm={4} md={4} lg={3} key={nav.path} style={{"display": "flex", "placeContent": "center"}}>
                <div className="glass strings-nav-item" >
                  <h2 style={{"cursor": 'pointer', "marginTop": ".4rem", "marginBottom": ".4rem"}} onClick={()=>navigate(nav.path)}>{nav.label}</h2>
                </div>
              </Grid>

            ))}
            {/* <Grid item xs={12} sm={12} md={3} style={{"display": "flex", "placeContent": "center"}}>
              <div className="glass strings-nav-item" >
                <h2 style={{"cursor": 'pointer'}} onClick={()=>navigate('/')}>Quickstarter</h2>
              </div>
            </Grid> */}
          </Grid>



        </div>
        <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}>
          <div className="glass" style={infoBoxStyle}>
            <div style={groupStyle}>
              <Photo image={photos.mapScalesPage.image} aspect={photos.mapScalesPage.aspect} width="90%"/>
            </div>
            <div style={groupStyle}>
              <Photo image={photos.viewMenu.image} aspect={photos.viewMenu.aspect} width="30%"/>
              <Photo image={photos.tuningMenu.image} aspect={photos.tuningMenu.aspect} width="30%"/>
              <Photo image={photos.tonicMenu.image} aspect={photos.tonicMenu.aspect} width="10%"/>
              <Photo image={photos.scalesMenu.image} aspect={photos.scalesMenu.aspect} width="30%"/>
            </div>
            <Photo image={photos.topDash.image} aspect={photos.topDash.aspect} width="90%"/>
            <Photo image={photos.scalesDash.image} aspect={photos.scaleDegrees.aspect} width="90%"/>
            <Photo image={photos.chordDash.image} aspect={photos.chordDash.aspect} width="60%"/>
            <Photo image={photos.noteNames.image} aspect={photos.noteNames.aspect} width="90%"/>
            <Photo image={photos.scaleDegrees.image} aspect={photos.scaleDegrees.aspect} width="90%"/>
            <Photo image={photos.solfege.image} aspect={photos.solfege.aspect} width="90%"/>
            <Photo image={photos.standardNeck.image} aspect={photos.standardNeck.aspect} width="90%"/>
            <Photo image={photos.fiveStringNeck.image} aspect={photos.fiveStringNeck.aspect} width="90%"/>
            <Photo image={photos.ukeNeck.image} aspect={photos.ukeNeck.aspect} width="90%"/>
            <Photo image={photos.violinNeck.image} aspect={photos.violinNeck.aspect} width="90%"/>
            <Photo image={photos.leftyNeck.image} aspect={photos.leftyNeck.aspect} width="90%"/>
          </div>
          <div className="glass3" style={infoBoxStyle}>
            <Photo image={photos.selectedNoteNoChord.image} aspect={photos.selectedNoteNoChord.aspect} width="90%"/>
            <Photo image={photos.selectedNoteWithChord.image} aspect={photos.selectedNoteWithChord.aspect} width="90%"/>
            <Photo image={photos.selectedNoteTwoChords.image} aspect={photos.selectedNoteTwoChords.aspect} width="90%"/>
          </div>
          <div className="glass4" style={infoBoxStyle}>
            <Photo image={photos.oneChordInMapScales.image} aspect={photos.oneChordInMapScales.aspect} width="90%"/>
            <Photo image={photos.sectionNeck.image} aspect={photos.sectionNeck.aspect} width="90%"/>
            <Photo image={photos.capo.image} aspect={photos.capo.aspect} width="90%"/>
          </div>
          <Grid container>
          {images.map((image, i) => (
            <Grid
              item
              xs={12} sm={12} md={6} lg={6} xl={6}
              key={`stringsImage${i}`}
            >
              <Photo image={image.image} aspect={image.aspect} width="90%"/>
            </Grid>
          ))}
          </Grid>
        </div>
      </div>
    </motion.div>
  )
}

