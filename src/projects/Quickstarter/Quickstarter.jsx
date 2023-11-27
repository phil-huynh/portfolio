import { useNavigate } from "react-router-dom"
import { motion, useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect } from "react"
import Photo from "../../Photo"
import styles from "./Quickstarter.module.css"
import QuickstarterTools from "./Tools"
import { Grid } from "@mui/material"

export default function Quickstarter() {

  const navigate = useNavigate()
  const { quickstarterPhotos: photos} = useStore()
  const [page, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const imgBorder = {
    border: "6px solid #0E0E0E",
    borderRadius: "10px"
  }

  const enterAnimation = async () => {
    await animate(page.current, { opacity: [0, 1] }, { duration: 1.5 })
  }

  const exitAnimation = async () => {
    await animate(page.current, {opacity: [1, 0] }, { duration: 1.5 })
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? enterAnimation() : exitAnimation()
  }, [isPresent])

  return (
    <div
      className={styles.wrapper}
      key="quickstart"
      ref={page}
    >
      <div className={styles.colorfilter}></div>
      <div className="contents">
        <div className={`glass ${styles.homeLink}`} onClick={()=>navigate('/')}>
          <h2>Home</h2>
        </div>
        <div className={styles.top}>
          <div className={`glass ${styles.title}`}>
            <h1 style={{"color": "white"}}>Quickstarter</h1>
          </div>
          <QuickstarterTools/>
        </div>
        <div>
          <Photo
            image={photos.startProject.image}
            aspect={photos.startProject.aspect}
            width="20%"
            extras={imgBorder}
          />
          <Photo
            image={photos.volumeAndPort.image}
            aspect={photos.volumeAndPort.aspect}
            width="40%"
            extras={imgBorder}
          />

          <Grid container style={{marginTop: "1rem", marginBottom: "1rem"}}>
            <Grid
              item xs={12} sm={12} md={6}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.yamlTemplate.image}
                aspect={photos.yamlTemplate.aspect}
                width="80%"
                extras={imgBorder}
              />

            </Grid>
            <Grid
              item xs={12} sm={12} md={6}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.jsonTemplate.image}
                aspect={photos.jsonTemplate.aspect}
                width="85%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>



          <Grid container style={{marginTop: "1rem", marginBottom: "1rem"}}>
            <Grid
              item xs={12} sm={12} md={4}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.nameInputError.image}
                aspect={photos.nameInputError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={4}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.portNumberError.image}
                aspect={photos.portNumberError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={4}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.dupPortError.image}
                aspect={photos.dupPortError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>









          <Grid container style={{marginTop: "1rem", marginBottom: "1rem"}}>
            <Grid
              item xs={12} sm={12} md={3}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.consNotAppError.image}
                aspect={photos.consNotAppError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={3}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.invalidAppError.image}
                aspect={photos.invalidAppError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={3}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.consNameError.image}
                aspect={photos.consNameError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={3}
              style={{display: "flex", justifyContent: "center", }}
            >
              <Photo
                image={photos.prodEqualsConsError.image}
                aspect={photos.prodEqualsConsError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>





          <Grid container style={{marginTop: "1rem", marginBottom: "1rem"}}>
            <Grid
              item xs={12} sm={12} md={6}
              style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}
            >
              <Photo
                image={photos.invalidMicroError.image}
                aspect={photos.invalidMicroError.aspect}
                width="60%"
                extras={imgBorder}
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={6}
              style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}
            >
              <Photo
                image={photos.missingProdMicroError.image}
                aspect={photos.missingProdMicroError.aspect}
                width="60%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>

          <Photo
            image={photos.success.image}
            aspect={photos.success.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.enterMicros.image}
            aspect={photos.enterMicros.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.enterQueues.image}
            aspect={photos.enterQueues.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.portAndPollerPrompt.image}
            aspect={photos.portAndPollerPrompt.aspect}
            width="40%"
            extras={imgBorder}
          />
          <Photo
            image={photos.viteSetup.image}
            aspect={photos.viteSetup.aspect}
            width="40%"
            extras={imgBorder}
          />
        </div>
      </div>
    </div>
  )
}