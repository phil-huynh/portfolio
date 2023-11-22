import StringsTheoryTools from "./Tools.jsx"
import AppLink from "./AppLink.jsx"
import GitLink from './GitLink'

import Photo from "../../Photo"
import styles from "./Strings.module.css"

import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { motion, useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect } from "react"


export default function StringsTheory() {

  const { stringsPhotos: photos } = useStore()
  const [isPresent, safeToRemove] = usePresence()
  const [page, animate] = useAnimate()

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

  const navigation = [
    {label: "Home", path: "/"},
    {label: "Quickstarter", path: "/quickstarter"},
    {label: "Osiris", path: "/osiris"},
    {label: "e Commerce", path: "/ecommerce"},
  ]

  const enterAnimation = async () => {
    await animate(page.current, { opacity: [0, 1] }, {duration: 1.5})
  }

  const exitAnimation = async () => {
    await animate(page.current, { opacity: [1, 0] }, {duration: 1.5})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? enterAnimation() : exitAnimation()
  }, [isPresent])

  return (
    <div
      className={styles.wrapper}
      ref={page}
      key="strings"
    >
      <div className="contents" >
        <div className={styles.introStyle}>
          <div className={`${styles.titleGlass} ${styles.titleLayout}`}>
            <h1 className={styles.title}>Strings Theory</h1>
          </div>
          <StringsTheoryTools/>
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
        <div className={styles.messageContainer}>
          <div className={`glass ${styles.messageCard}`}>
            <p>
            The intent of this app is to be a tool that strings players of all skill levels can use to continue to grow and find new sounds. Players can explore new scales or tunings that they have not used before or they can study structures that they already use in greater depth.
            </p>
          </div>
        </div>

        <div className={styles.photoSection}>
          <div className={`glass ${styles.info}`}>
            <div className={styles.group}>
              <Photo
                image={photos.mapScalesPage.image}
                aspect={photos.mapScalesPage.aspect}
                width="90%"
              />
            </div>
            <div className={styles.group}>
              <Photo
                image={photos.viewMenu.image}
                aspect={photos.viewMenu.aspect}
                width="30%"
              />
              <Photo
                image={photos.tuningMenu.image}
                aspect={photos.tuningMenu.aspect}
                width="30%"
              />
              <Photo
                image={photos.tonicMenu.image}
                aspect={photos.tonicMenu.aspect}
                width="10%"
              />
              <Photo
                image={photos.scalesMenu.image}
                aspect={photos.scalesMenu.aspect}
                width="30%"
              />
            </div>
            <Photo
              image={photos.topDash.image}
              aspect={photos.topDash.aspect}
              width="90%"
            />
            <Photo
              image={photos.scalesDash.image}
              aspect={photos.scaleDegrees.aspect}
              width="90%"
            />
            <Photo
              image={photos.chordDash.image}
              aspect={photos.chordDash.aspect}
              width="60%"
            />
            <Photo
              image={photos.noteNames.image}
              aspect={photos.noteNames.aspect}
              width="90%"
            />
            <Photo
              image={photos.scaleDegrees.image}
              aspect={photos.scaleDegrees.aspect}
              width="90%"
            />
            <Photo
              image={photos.solfege.image}
              aspect={photos.solfege.aspect}
              width="90%"
            />
            <Photo
              image={photos.standardNeck.image}
              aspect={photos.standardNeck.aspect}
              width="90%"
            />
            <Photo
              image={photos.fiveStringNeck.image}
              aspect={photos.fiveStringNeck.aspect}
              width="90%"
            />
            <Photo
              image={photos.ukeNeck.image}
              aspect={photos.ukeNeck.aspect}
              width="90%"
            />
            <Photo
              image={photos.violinNeck.image}
              aspect={photos.violinNeck.aspect}
              width="90%"
            />
            <Photo
              image={photos.leftyNeck.image}
              aspect={photos.leftyNeck.aspect}
              width="90%"
            />
          </div>
          <div className={`glass3 ${styles.info}`}>
            <Photo
              image={photos.selectedNoteNoChord.image}
              aspect={photos.selectedNoteNoChord.aspect}
              width="90%"
            />
            <Photo
              image={photos.selectedNoteWithChord.image}
              aspect={photos.selectedNoteWithChord.aspect}
              width="90%"
            />
            <Photo
              image={photos.selectedNoteTwoChords.image}
              aspect={photos.selectedNoteTwoChords.aspect}
              width="90%"
            />
          </div>
          <div className={`glass4 ${styles.info}`}>
            <Photo
              image={photos.oneChordInMapScales.image}
              aspect={photos.oneChordInMapScales.aspect}
              width="90%"
            />
            <Photo
              image={photos.sectionNeck.image}
              aspect={photos.sectionNeck.aspect}
              width="90%"
            />
            <Photo
              image={photos.capo.image}
              aspect={photos.capo.aspect}
              width="90%"
            />
          </div>
          <Grid container>
          {images.map((image, i) => (
            <Grid
              item
              xs={12} sm={12} md={6} lg={6} xl={6}
              key={`stringsImage${i}`}
            >
              <Photo
                image={image.image}
                aspect={image.aspect}
                width="90%"
              />
            </Grid>
          ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}

