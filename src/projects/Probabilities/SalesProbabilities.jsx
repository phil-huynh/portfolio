import { useNavigate } from "react-router-dom"
import { useStore } from "../../Store"
import { Grid } from "@mui/material"
import { useEffect } from "react"
import Photo from "../../Photo.jsx"
import styles from "./Probabilities.module.css"
import { useAnimate, usePresence } from "framer-motion"
import GitLink from "./GitLink"
import PhotoModal from "../../PhotoModal"

export default function SalesProbabilities() {

  const navigate = useNavigate()
  const { salesPhotos: photos, photoModal, currentPhoto, selectPhoto } = useStore()

  const [page, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const borderStyle = {
    border: "1px gray solid",
    // boxShadow: "20px 20px 20px #1E1E1E"
  }

  const navigation = [
    {label: "Home", path: "/"},
    {label: "Strings Theory", path: "/strings-theory"},
    {label: "Quickstarter", path: "/quickstarter"},
    {label: "Ari Design", path: "/ecommerce"},
    {label: "mikeslist", path: "/osiris"},
  ]

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
    <div className={styles.wrapper} key="probabilities" ref={page}>
      <div className="contents">
          {photoModal ?
            <PhotoModal
              image={currentPhoto.image}
              aspect={currentPhoto.aspect}
              width={currentPhoto.width}
            />
            :null
          }
        <div className={styles.top}>
          <div className={`glass ${styles.title}`}>
            <h1 style={{"color": "white", marginTop: "0", marginBottom: "0", fontSize: "5rem"}}>Sales</h1>
            <h1 style={{"color": "white", marginTop: "0", marginBottom: "0", fontSize: "5rem"}}>Probabilities</h1>
            <h1 style={{"color": "white", marginTop: "0", marginBottom: "0", fontSize: "5rem"}}>Dashboard</h1>
          </div>
          {/* <SalesTools/> */}
          <GitLink/>
        </div>
        <div className={styles.navBar}>
          <Grid container>
            {navigation.map(nav => (
              <Grid item xs={6} sm={4} md={4} lg={2.4} key={nav.path} className={styles.navGrid}>
                <div className={`glass ${styles.navItem}`} onClick={()=>navigate(nav.path)}>
                  <h3 className={styles.navLabel}>{nav.label}</h3>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={styles.infoContainer}>


          <Grid container>
            <Grid
              item xs={12} sm={12} md={6}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.tableLightFull.image,
                aspect: photos.tableLightFull.aspect,
                width:"80%"
              })}
            >
              <Photo
                image={photos.tableLightFull.image}
                aspect={photos.tableLightFull.aspect}
                extras={borderStyle} width="95%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={6}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.tableDarkFull.image,
                aspect: photos.tableDarkFull.aspect,
                width:"80%"
              })}
            >
              <Photo
                image={photos.tableDarkFull.image}
                aspect={photos.tableDarkFull.aspect}
                extras={borderStyle} width="95%"
              />
            </Grid>
          </Grid>


          <Grid container>
            <Grid
              item xs={12} sm={12} md={3}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.chartsLightFull.image,
                aspect: photos.chartsLightFull.aspect,
                width:"80%"
              })}
            >
              <Photo
                image={photos.chartsLightFull.image}
                aspect={photos.chartsLightFull.aspect}
                extras={borderStyle} width="96%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={3}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.noHistoryDesktop.image,
                aspect: photos.noHistoryDesktop.aspect,
                width:"80%"
              })}
            >
              <Photo
                image={photos.noHistoryDesktop.image}
                aspect={photos.noHistoryDesktop.aspect}
                extras={borderStyle} width="90%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={3}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.chartsDarkFull2.image,
                aspect: photos.chartsDarkFull2.aspect,
                width:"80%"
              })}
            >
              <Photo
                image={photos.chartsDarkFull2.image}
                aspect={photos.chartsDarkFull2.aspect}
                extras={borderStyle} width="90%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={3}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.noDecreasingDesktop.image,
                aspect: photos.noDecreasingDesktop.aspect,
                width:"80%"
              })}
            >
              <Photo
                image={photos.noDecreasingDesktop.image}
                aspect={photos.noDecreasingDesktop.aspect}
                extras={borderStyle} width="90%"
              />
            </Grid>
          </Grid>


          <Grid container>
            <Grid
              item xs={12} sm={12} md={2}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.mobileTopLight.image,
                aspect: photos.mobileTopLight.aspect,
                width:"40%"
              })}
            >
              <Photo
                image={photos.mobileTopLight.image}
                aspect={photos.mobileTopLight.aspect}
                extras={borderStyle} width="87%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={2}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.mobileBottomLight.image,
                aspect: photos.mobileBottomLight.aspect,
                width:"40%"
              })}
            >
              <Photo
                image={photos.mobileBottomLight.image}
                aspect={photos.mobileBottomLight.aspect}
                extras={borderStyle} width="87%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={2}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.noHistory.image,
                aspect: photos.noHistory.aspect,
                width:"37%"
              })}
            >
              <Photo
                image={photos.noHistory.image}
                aspect={photos.noHistory.aspect}
                extras={borderStyle} width="80%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={2}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.mobileTopDark.image,
                aspect: photos.mobileTopDark.aspect,
                width:"40%"
              })}
            >
              <Photo
                image={photos.mobileTopDark.image}
                aspect={photos.mobileTopDark.aspect}
                extras={borderStyle} width="87%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={2}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.mobileBottomDark.image,
                aspect: photos.mobileBottomDark.aspect,
                width:"37%"
              })}
            >
              <Photo
                image={photos.mobileBottomDark.image}
                aspect={photos.mobileBottomDark.aspect}
                extras={borderStyle} width="80%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={2}
              className={styles.salesGridSection}
              onClick={()=>selectPhoto({
                image: photos.noDecreasingFactors.image,
                aspect: photos.noDecreasingFactors.aspect,
                width:"37%"
              })}
            >
              <Photo
                image={photos.noDecreasingFactors.image}
                aspect={photos.noDecreasingFactors.aspect}
                extras={borderStyle} width="80%"
              />
            </Grid>
          </Grid>



          <Grid container>
            <Grid
              item xs={12} sm={12} md={6}
              className={styles.salesGridSection}
            >
              <Photo
                image={photos.fullMobileLight.image}
                aspect={photos.fullMobileLight.aspect}
                extras={borderStyle} width="90%"
              />
            </Grid>
            <Grid
              item xs={12} sm={12} md={6}
              className={styles.salesGridSection}
            >
              <Photo
                image={photos.fullMobileDark.image}
                aspect={photos.fullMobileDark.aspect}
                extras={borderStyle} width="90%"
              />
            </Grid>
          </Grid>
        </div>
     </div>
    </div>
  )
}





