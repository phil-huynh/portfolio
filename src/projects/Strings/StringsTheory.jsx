import StringsTheoryTools from "./Tools.jsx"
import AppLink from "./AppLink.jsx"
import GitLink from './GitLink'

import Photo from "../../Photo"
import styles from "./Strings.module.css"

import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect } from "react"


export default function StringsTheory() {

  const { stringsPhotos: photos } = useStore()
  const [isPresent, safeToRemove] = usePresence()
  const [page, animate] = useAnimate()

  const images = [

    photos.alterations,

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



  const extras = {
    marginTop: ".75rem",
    marginBottom: ".75rem"
  }


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
              Strings Theory is a resource application for music students and professionals.
              Players can explore new scales or tunings that they have not used before or they can study structures that they already use in greater depth.
              </p>
            </div>
          </div>
          {/* <Photo
            image={"https://media.giphy.com/media/2mxIRT4tYqfjCd9pI9/giphy.gif"}
            aspect="2.59"
            width="70%"
          /> */}
          <div className={styles.introStyle}></div>

        <div className={styles.photoSection}>
          <div className={`glass6 ${styles.info}`}>
            <Grid container>
              <Grid
                item
                sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                xs={12} sm={12} md={6} lg={7} xl={7}
              >
                <p style={{fontSize: "1.5rem"}}>
                Users can choose how they would like the neck to be rendered. Users can choose the default "Traditional View" to see the notes stacked with the lowest on the bottom and the highest notes on the top. "Mirror View" displays the low notes on top and the high notes on the bottom(this emulates a guitarist looking at their hands in a mirror). "Lefty Traditional View" and "Lefty Mirror View" do the same things respectively in addition to the neck switching directions from (low to high) to (high to low).Users can choose from several instruments with multiple tunings. Neck renders will dynamically render to correspond with the instrument and tuning selected.
                </p>
              </Grid>

              <Grid
                item
                container
                xs={12} sm={12} md={6} lg={5} xl={5}
              >

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.standardNeck.image}
                    aspect={photos.standardNeck.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.fiveStringNeck.image}
                    aspect={photos.fiveStringNeck.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.ukeNeck.image}
                    aspect={photos.ukeNeck.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.violinNeck.image}
                    aspect={photos.violinNeck.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.leftyNeck.image}
                    aspect={photos.leftyNeck.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
              </Grid>
            </Grid>
          </div>







          <div className={`${styles.magicGlass} ${styles.info}`}>
            <Grid container>
              <Grid
                item
                container
                xs={12} sm={12} md={6} lg={7} xl={7}
                order={{ xs: 2, sm: 2, md: 1, lg: 1, xl: 1}}
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.noteNames.image}
                    aspect={photos.noteNames.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.scaleDegrees.image}
                    aspect={photos.scaleDegrees.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.solfege.image}
                    aspect={photos.solfege.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                xs={12} sm={12} md={6} lg={5} xl={5}
                order={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2}}
              >
                <p style={{fontSize: "1.5rem"}}>
                The notes on the neck can be viewed as note names(A, B, C, D, E, F, G, ect..), scale degrees(1,2,3,4,5,6,7, ect...), or solfege(do, re, mi, fa, sol, la, ti, do). The default voicing toggle selects what type of voicing the chords fall back to when reset. The default voicing can be Triads or Seventh Chords.
                </p>
              </Grid>
            </Grid>
          </div>


          <div className={`glass3 ${styles.info}`}>
            <Grid container>
              <Grid
                item
                sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                xs={12} sm={12} md={12} lg={12} xl={12}
              >
                <p style={{fontSize: "1.5rem"}}>
                Clicking on a note name in the scale display will mark all locations of the selected note on the neck and will also highlight the selected note name in all of the chord cards that contain it. Click the currently selected note to clear selection.
                </p>
              </Grid>
              <Grid
                item
                container
                xs={12} sm={12} md={12} lg={12} xl={12}
              >

                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.selectedNoteNoChord.image}
                    aspect={photos.selectedNoteNoChord.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.selectedNoteWithChord.image}
                    aspect={photos.selectedNoteWithChord.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.selectedNoteTwoChords.image}
                    aspect={photos.selectedNoteTwoChords.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
              </Grid>
            </Grid>
          </div>



          <div className={`glass4 ${styles.info}`}>
            <Grid container>
              <Grid
                item
                sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                xs={12} sm={12} md={6} lg={12} xl={12}
              >
                <p style={{fontSize: "1.5rem"}}>
                  When a chord card is selected, the notes of the chord will be highlighted on the neck and in the scale display. Click the currently selected chord card to clear selection.
                  If a chord has been selected, a "Chord Degrees" button will appear in the dash. When this feature is toggled on, the notes that are contained in the chord will display as chord degrees on the neck.
                </p>
              </Grid>
              <Grid
                item
                container
                xs={12} sm={12} md={6} lg={12} xl={12}
              >
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                <Photo
                  image={photos.oneChordInMapScales.image}
                  aspect={photos.oneChordInMapScales.aspect}
                  width="90%"
                  extras={extras}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                <Photo
                  image={photos.sectionNeck.image}
                  aspect={photos.sectionNeck.aspect}
                  width="90%"
                  extras={extras}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                <Photo
                  image={photos.capo.image}
                  aspect={photos.capo.aspect}
                  width="90%"
                  extras={extras}
                />
                </Grid>
              </Grid>
            </Grid>
          </div>



          <div className={`glass5 ${styles.info}`}>
            <Grid container>
              <Grid
                item
                sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                xs={12} sm={12} md={6} lg={12} xl={12}
              >
                <p style={{fontSize: "1.5rem"}}>
                When a chord is selected, a "Lock" toggle will appear on the chord card. If the user clicks this toggle, it will lock the chord and allow for a second chord to be selected. The notes of the second chord will also highlight on the neck and in the scale display. The remaining notes that do not belong to either chord will automatically be hidden. If the two chords share notes, the "Shared Notes" indicator will glow in the upper right corner and the note names of the shared notes inside the chord cards and in the scale display will glow in the same color as the indicator. Click on the current second chord to clear the second chord selection. The "Locked" chord can be unlocked by clicking the toggle again. Both chord selections can be cleared by clicking the "Locked" chord.
                </p>
              </Grid>
              <Grid
                item
                container
                xs={12} sm={12} md={6} lg={12} xl={12}
              >
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.twoChordsMapScales.image}
                    aspect={photos.twoChordsMapScales.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.focusChord1MapScales.image}
                    aspect={photos.focusChord1MapScales.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.focusChord2MapScales.image}
                    aspect={photos.focusChord2MapScales.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.chord1DegsMapScales.image}
                    aspect={photos.chord1DegsMapScales.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.chord2DegsMapScales.image}
                    aspect={photos.chord2DegsMapScales.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
              </Grid>
            </Grid>
          </div>



          <div className={`glass ${styles.info}`}>
            <Grid container>
              <Grid
                item
                sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                xs={12} sm={12} md={6} lg={12} xl={12}
              >
                <p style={{fontSize: "1.5rem"}}>
                Map chords section
                </p>
              </Grid>
              <Grid
                item
                container
                xs={12} sm={12} md={6} lg={12} xl={12}
              >

                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.chordDash.image}
                    aspect={photos.chordDash.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.twoNamesMapChords.image}
                    aspect={photos.twoNamesMapChords.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.focus1MapChords.image}
                    aspect={photos.focus1MapChords.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                  <Photo
                    image={photos.focus2DegsMapChords.image}
                    aspect={photos.focus2DegsMapChords.aspect}
                    width="90%"
                    extras={extras}
                  />
                </Grid>
              </Grid>
            </Grid>
          </div>

{/*
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
            /> */}


        </div>
      </div>
    </div>
  )
}

