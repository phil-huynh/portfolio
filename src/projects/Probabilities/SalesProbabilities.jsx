import { useNavigate } from "react-router-dom"
import { useStore } from "../../Store"
import { Grid } from "@mui/material"
import Photo from "../../Photo.jsx"
import styles from "./Probabilities.module.css"

export default function SalesProbabilities() {

  const navigate = useNavigate()
  const { salesPhotos: photos } = useStore()

  const borderStyle = {
    border: "1px gray solid",
    boxShadow: "20px 20px 20px #1E1E1E"
  }

  return (
    <div className={styles.wrapper}>
      <div className="contents">
        <div className={styles.top}>
          <div className={`glass ${styles.title}`}>
          <h1 style={{"color": "white"}}>Sales Probabilities</h1>
          </div>
          <div className={`glass ${styles.homeLink}`}>
            <h2 onClick={()=>navigate('/')}>Home</h2>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem"}}>
          <Photo
            image={photos.tableDarkFull.image}
            aspect={photos.tableDarkFull.aspect}
            extras={borderStyle}
            width="80%"
          />
          <Photo
            image={photos.tableLightFull.image}
            aspect={photos.tableLightFull.aspect}
            extras={borderStyle} width="80%"
          />
          <Photo
            image={photos.chartsDarkFull.image}
            aspect={photos.chartsDarkFull.aspect}
            extras={borderStyle} width="80%"
          />
          <Photo
            image={photos.chartsLightFull.image}
            aspect={photos.chartsLightFull.aspect}
            extras={borderStyle} width="80%"
          />
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={styles.salesGridSection}>
              <Photo
                image={photos.noHistory.image}
                aspect={photos.noHistory.aspect}
                extras={borderStyle} width="80%"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={styles.salesGridSection}>
              <Photo
                image={photos.noDecreasingFactors.image}
                aspect={photos.noDecreasingFactors.aspect}
                extras={borderStyle} width="80%"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={styles.salesGridSection}>
              <Photo
                image={photos.fullMobileLight.image}
                aspect={photos.fullMobileLight.aspect}
                extras={borderStyle} width="80%"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={styles.salesGridSection}>
              <Photo
                image={photos.fullMobileDark.image}
                aspect={photos.fullMobileDark.aspect}
                extras={borderStyle} width="80%"
              />
            </Grid>
          </Grid>

        </div>
     </div>
    </div>
  )
}





