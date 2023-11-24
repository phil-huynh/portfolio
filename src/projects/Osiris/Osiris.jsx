import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useStore } from "../../Store"
import Photo from "../../Photo"
import styles from "./Osiris.module.css"
import PhotoModal from "../../PhotoModal"

export default function Osiris() {

  const navigate = useNavigate()

  const { osirisImages: photos, currentPhoto, photoModal, selectPhoto} = useStore()


  const borderStyle = {
    border: "1px gray solid",
    boxShadow: "15px 15px 12px rgba(16, 16, 16, 0.5)"
  }

  return (
    <div className={styles.wrapper}>
      <div className="contents">
      {photoModal ?
        <PhotoModal
          image={currentPhoto.image}
          aspect={currentPhoto.aspect}
          width={currentPhoto.width}
        />
        :null
        }
        <div className={styles.header}>
          <div className={`glass ${styles.headerItem}`}>
            <h1>Hello World: Osiris</h1>
          </div>
          <div className={`glass ${styles.homelink}`} onClick={()=>navigate('/')}>
            <h2>Home</h2>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <Grid container>
            {photos.mobile.map((photo, i) => (
              <Grid
                item
                xs={6} sm={6} md={3} lg={2} xl={2}
                className={styles.gridSection}
                key={`mobileImage${i}`}
                onClick={()=>selectPhoto({image: photo.image, aspect: photo.aspect, width: "25%" })}
              >
                <Photo image={photo.image} width="80%" aspect={photo.aspect} extras={borderStyle}/>
              </Grid>
            ))}
          </Grid>
          <Photo image={photos.tablet.image} width="35%" aspect={photos.tablet.aspect} extras={borderStyle}/>
          <Grid container>
            {photos.desktop.map((photo, i) => (
              <Grid
                item
                xs={12} sm={10} md={10} lg={6} xl={6}
                className={styles.gridSection}
                key={`desktopImage${i}`}
              >
                <Photo image={photo.image} width="90%" aspect={photo.aspect} extras={borderStyle}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}










