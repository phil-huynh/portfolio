import StringsTheoryTools from "./Tools.jsx"
import AppLink from "./AppLink.jsx"
import GitLink from './GitLink'

import Photo from "../../Photo"
import PhotoModal from "../../PhotoModal.jsx"
import styles from "./Strings.module.css"

import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect } from "react"


export default function StringsTheory() {

  const { stringsPhotos: ph, selectPhoto, photoModal, currentPhoto } = useStore()
  const [isPresent, safeToRemove] = usePresence()
  const [page, animate] = useAnimate()

  const images = [
    ph.alterations,
  ]

  const navigate = useNavigate()

  const navigation = [
    {label: "Home", path: "/"},
    {label: "Quickstarter", path: "/quickstarter"},
    {label: "Ari Design", path: "/ecommerce"},
    {label: "mikeslist", path: "/osiris"},
    {label: "Probabilities", path: "/sales-probabilities"},
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
        {photoModal ?
          <PhotoModal
            image={currentPhoto.image}
            aspect={currentPhoto.aspect}
            width={currentPhoto.width}
            boxShadow={false}
          />
          :null
        }
        <div className={styles.introStyle}>
          <div className={`${styles.titleGlass} ${styles.titleLayout}`}>
            <h1 className={styles.title}>Strings Theory</h1>
          </div>
          {/* <StringsTheoryTools/> */}
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
              <Grid item xs={6} sm={4} md={4} lg={2.4} key={nav.path} className={styles.navGrid}>
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
          <div className={`${styles.purpleGlass} ${styles.info}`}>
            <Grid container>
              <Grid item className={styles.textGrid} xs={12} sm={12} md={6} lg={7} xl={7} >
                <p style={{fontSize: "1.5rem"}}>
                Users can choose how they would like the neck to be rendered. Users can choose the default "Traditional View" to see the notes stacked with the lowest on the bottom and the highest notes on the top. "Mirror View" displays the low notes on top and the high notes on the bottom(this emulates a guitarist looking at their hands in a mirror). "Lefty Traditional View" and "Lefty Mirror View" do the same things respectively in addition to the neck switching directions from (low to high) to (high to low).Users can choose from several instruments with multiple tunings. Neck renders will dynamically render to correspond with the instrument and tuning selected.
                </p>
              </Grid>

              <Grid item container xs={12} sm={12} md={6} lg={5} xl={5} >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.standardNeck.image, aspect: ph.standardNeck.aspect, width: "90%" }) }
                  >
                  <Photo image={ph.standardNeck.image} aspect={ph.standardNeck.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.fiveStringNeck.image, aspect: ph.fiveStringNeck.aspect, width: "90%" })}
                >
                  <Photo image={ph.fiveStringNeck.image} aspect={ph.fiveStringNeck.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.ukeNeck.image, aspect: ph.ukeNeck.aspect, width: "90%" })}
                >
                  <Photo image={ph.ukeNeck.image} aspect={ph.ukeNeck.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.violinNeck.image, aspect: ph.violinNeck.aspect, width: "90%" })}
                >
                  <Photo image={ph.violinNeck.image} aspect={ph.violinNeck.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.leftyNeck.image, aspect: ph.leftyNeck.aspect, width: "90%" })}
                >
                  <Photo image={ph.leftyNeck.image} aspect={ph.leftyNeck.aspect} width="90%" extras={extras} />
                </Grid>
              </Grid>
            </Grid>
          </div>


          <div className={`${styles.magicGlass} ${styles.info}`}>
            <Grid container>
              <Grid item container xs={12} sm={12} md={6} lg={7} xl={7} order={{ xs: 2, sm: 2, md: 1, lg: 1, xl: 1}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.noteNames.image, aspect: ph.noteNames.aspect, width: "90%" })}
                >
                  <Photo image={ph.noteNames.image} aspect={ph.noteNames.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.scaleDegrees.image, aspect: ph.scaleDegrees.aspect, width: "90%" })}
                >
                  <Photo image={ph.scaleDegrees.image} aspect={ph.scaleDegrees.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.solfege.image, aspect: ph.solfege.aspect, width: "90%" })}
                >
                  <Photo image={ph.solfege.image} aspect={ph.solfege.aspect} width="90%" extras={extras} />
                </Grid>
              </Grid>
              <Grid item
                className={styles.textGrid}
                xs={12} sm={12} md={6} lg={5} xl={5}
                order={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2}}
              >
                <p style={{fontSize: "1.5rem"}}>
                The notes on the neck can be viewed as note names(A, B, C, D, E, F, G, ect..), scale degrees(1,2,3,4,5,6,7, ect...), or solfege(do, re, mi, fa, sol, la, ti, do). The default voicing toggle selects what type of voicing the chords fall back to when reset. The default voicing can be Triads or Seventh Chords.
                </p>
              </Grid>
            </Grid>
          </div>


          <div className={`${styles.redGlass} ${styles.info}`}>
            <Grid container>
              <Grid item className={styles.textGrid} xs={12} sm={12} md={12} lg={12} xl={12} >
                <p style={{fontSize: "1.5rem"}}>
                Clicking on a note name in the scale display will mark all locations of the selected note on the neck and will also highlight the selected note name in all of the chord cards that contain it. Click the currently selected note to clear selection.
                </p>
              </Grid>
              <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} >
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.selectedNoteNoChord.image, aspect: ph.selectedNoteNoChord.aspect, width: "90%" })}
                >
                  <Photo image={ph.selectedNoteNoChord.image} aspect={ph.selectedNoteNoChord.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.selectedNoteWithChord.image, aspect: ph.selectedNoteWithChord.aspect, width: "90%" })}
                >
                  <Photo image={ph.selectedNoteWithChord.image} aspect={ph.selectedNoteWithChord.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.selectedNoteTwoChords.image, aspect: ph.selectedNoteTwoChords.aspect, width: "90%" })}
                >
                  <Photo image={ph.selectedNoteTwoChords.image} aspect={ph.selectedNoteTwoChords.aspect} width="90%" extras={extras} />
                </Grid>
              </Grid>
            </Grid>
          </div>



          <div className={`${styles.yellowGlass} ${styles.info}`}>
            <Grid container>
              <Grid item className={styles.textGrid} xs={12} sm={12} md={6} lg={12} xl={12} >
                <p style={{fontSize: "1.5rem"}}>
                  When a chord card is selected, the notes of the chord will be highlighted on the neck and in the scale display. Click the currently selected chord card to clear selection. If a chord has been selected, a "Chord Degrees" button will appear in the dash. When this feature is toggled on, the notes that are contained in the chord will display as chord degrees on the neck.
                </p>
              </Grid>
              <Grid item
                container
                xs={12} sm={12} md={6} lg={12} xl={12}
              >
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.oneChordInMapScales.image, aspect: ph.oneChordInMapScales.aspect, width: "80%" }) }
                >
                <Photo image={ph.oneChordInMapScales.image} aspect={ph.oneChordInMapScales.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.sectionNeck.image, aspect: ph.sectionNeck.aspect, width: "80%" })}
                >
                <Photo image={ph.sectionNeck.image} aspect={ph.sectionNeck.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.capo.image, aspect: ph.capo.aspect, width: "80%" })}
                >
                <Photo image={ph.capo.image} aspect={ph.capo.aspect} width="90%" extras={extras} />
                </Grid>
              </Grid>
            </Grid>
          </div>



          <div className={`${styles.greenGlass} ${styles.info}`}>
            <Grid container>
              <Grid item className={styles.textGrid} xs={12} sm={12} md={6} lg={12} xl={12} >
                <p style={{fontSize: "1.5rem"}}>
                When a chord is selected, a "Lock" toggle will appear on the chord card. If the user clicks this toggle, it will lock the chord and allow for a second chord to be selected. The notes of the second chord will also highlight on the neck and in the scale display. The remaining notes that do not belong to either chord will automatically be hidden. If the two chords share notes, the "Shared Notes" indicator will glow in the upper right corner and the note names of the shared notes inside the chord cards and in the scale display will glow in the same color as the indicator. Click on the current second chord to clear the second chord selection. The "Locked" chord can be unlocked by clicking the toggle again. Both chord selections can be cleared by clicking the "Locked" chord.
                </p>
              </Grid>
              <Grid item container xs={12} sm={12} md={6} lg={12} xl={12}>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.twoChordsMapScales.image, aspect: ph.twoChordsMapScales.aspect, width: "80%" })}
                >
                  <Photo image={ph.twoChordsMapScales.image} aspect={ph.twoChordsMapScales.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.focusChord1MapScales.image, aspect: ph.focusChord1MapScales.aspect, width: "80%" })}
                >
                  <Photo image={ph.focusChord1MapScales.image} aspect={ph.focusChord1MapScales.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.focusChord2MapScales.image, aspect: ph.focusChord2MapScales.aspect, width: "80%" })}
                >
                  <Photo image={ph.focusChord2MapScales.image} aspect={ph.focusChord2MapScales.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.chord1DegsMapScales.image, aspect: ph.chord1DegsMapScales.aspect, width: "80%" })}
                >
                  <Photo image={ph.chord1DegsMapScales.image} aspect={ph.chord1DegsMapScales.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={2.4} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.chord2DegsMapScales.image, aspect: ph.chord2DegsMapScales.aspect, width: "80%" })}
                >
                  <Photo image={ph.chord2DegsMapScales.image} aspect={ph.chord2DegsMapScales.aspect} width="90%" extras={extras} />
                </Grid>
              </Grid>
            </Grid>
          </div>



          <div className={`glass ${styles.info}`}>
            <Grid container>
              <Grid item className={styles.textGrid} xs={12} sm={12} md={6} lg={12} xl={12}>
                <p style={{fontSize: "1.5rem"}}>
                  Map chords section
                </p>
              </Grid>
              <Grid item container xs={12} sm={12} md={6} lg={12} xl={12} >
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.chordDash.image, aspect: ph.chordDash.aspect, width: "80%" })}
                >
                  <Photo image={ph.chordDash.image} aspect={ph.chordDash.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.twoNamesMapChords.image, aspect: ph.twoNamesMapChords.aspect, width: "80%" })}
                >
                  <Photo image={ph.twoNamesMapChords.image} aspect={ph.twoNamesMapChords.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.focus1MapChords.image, aspect: ph.focus1MapChords.aspect, width: "80%" })}
                >
                  <Photo image={ph.focus1MapChords.image} aspect={ph.focus1MapChords.aspect} width="90%" extras={extras} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={styles.photoGrid}
                  onClick={()=>selectPhoto({ image: ph.focus2DegsMapChords.image, aspect: ph.focus2DegsMapChords.aspect, width: "80%" })}
                >
                  <Photo image={ph.focus2DegsMapChords.image} aspect={ph.focus2DegsMapChords.aspect} width="90%" extras={extras} />
                </Grid>
              </Grid>
            </Grid>
          </div>

{/*
            <div className={styles.group}>
              <Photo
                image={ph.mapScalesPage.image}
                aspect={ph.mapScalesPage.aspect}
                width="90%"
              />
            </div>
            <div className={styles.group}>
              <Photo
                image={ph.viewMenu.image}
                aspect={ph.viewMenu.aspect}
                width="30%"
              />
              <Photo
                image={ph.tuningMenu.image}
                aspect={ph.tuningMenu.aspect}
                width="30%"
              />
              <Photo
                image={ph.tonicMenu.image}
                aspect={ph.tonicMenu.aspect}
                width="10%"
              />
              <Photo
                image={ph.scalesMenu.image}
                aspect={ph.scalesMenu.aspect}
                width="30%"
              />
            </div>
            <Photo
              image={ph.topDash.image}
              aspect={ph.topDash.aspect}
              width="90%"
            />
            <Photo
              image={ph.scalesDash.image}
              aspect={ph.scaleDegrees.aspect}
              width="90%"
            /> */}


        </div>
      </div>
    </div>
  )
}

