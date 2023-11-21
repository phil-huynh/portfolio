import Tools from "./Tools.jsx"
import AppLink from "./AppLink.jsx"
import GitLink from './GitLink'

import Photo from "../../Photo"
import styles from "./Strings.module.css"

import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useStore } from "../../Store"


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


  const infoBoxStyle = {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  }


  const groupStyle = {
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem"
  }

  const introMessageContainer = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const introMessageCard = {
    width: "80%",
    padding: "1.5rem",
    fontSize: "1.5rem",
    marginTop: "1.5rem"
  }


  const navigation = [
    {label: "Home", path: "/"},
    {label: "Quickstarter", path: "/quickstarter"},
    {label: "Osiris", path: "/osiris"},
    {label: "e Commerce", path: "/ecommerce"},
  ]

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="contents" >
        <div className={styles.introStyle}>
          <div className={`${styles.titleGlass} ${styles.titleLayout}`}>
            <h1 className={styles.title}>Strings Theory</h1>
          </div>
          <Tools/>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <AppLink/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <GitLink/>
            </Grid>
          </Grid>
        </div>
        <div className={styles.navBar}>
          <Grid container>
            {navigation.map(nav => (
              <Grid item xs={6} sm={4} md={4} lg={3} key={nav.path} className={styles.navGrid}>
                <div className={`glass ${styles.navItem}`} onClick={()=>navigate(nav.path)}>
                  <h2 className={styles.navLabel}>{nav.label}</h2>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div style={introMessageContainer}>
          <div className='glass' style={introMessageCard}>
            <p>
            The intent of this app is to be a tool that strings players of all skill levels can use to continue to grow and find new sounds. Players can explore new scales or tunings that they have not used before or they can study structures that they already use in greater depth.
            </p>
          </div>
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

