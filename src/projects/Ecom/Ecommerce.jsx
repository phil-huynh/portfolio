import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect } from "react"
import Photo from "../../Photo"
import styles from "./Ecom.module.css"
import PhotoModal from "../../PhotoModal"

export default function Ecommerce() {

  const navigate = useNavigate()
  const {locate, locate2, locate3, eCommImages, selectPhoto, photoModal, currentPhoto} = useStore()

  const [page, animatePage] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()


  const borderStyle = {
    border: "1px gray solid",
    boxShadow: "15px 15px 12px #1E1E1E"
  }

  const enterAnimation = async () => {
    await animatePage(page.current, { height: 0, width: 0})
    await animatePage(page.current, { height: "100vh", width: "100vw"}, {duration: 1.2})
  }

  const exitAnimation = async () => {
    await animatePage(page.current, {height: 0, width: 0}, {duration: .8})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? enterAnimation() : exitAnimation()
  }, [isPresent])

  return (
    <div
      className={styles.wrapper}
      ref={page}
    >
      <section className="contents">
        {photoModal ?
          <PhotoModal
            image={currentPhoto.image}
            aspect={currentPhoto.aspect}
            width={currentPhoto.width}
          />
          :null
        }
        <div className={styles.top}>
          <div className={`glass ${styles.header}`}>
            <h1>Hello World: Ecommerce</h1>
          </div>
          <div className={`glass ${styles.navItem}`} onClick={()=>navigate('/')}>
            <h2>Home</h2>
          </div>
        </div>
        {Object.keys(eCommImages).map(section =>(
          <div key={section}>
            <h2 className={styles.sectionHeader}>{section.toUpperCase()}</h2>
            <Grid container>
              {eCommImages[section].map((photo, i) => (
                <Grid
                  item
                  xs={12} sm={12} md={6} lg={3} xl={3}
                  key={`ecomImage${i}`}
                  className={styles.photoGridBox}
                  onClick={()=>selectPhoto({image: photo.image, aspect: photo.aspect, width: "70%" })}
                >
                  <Photo image={photo.image} width="90%" aspect={photo.aspect} extras={borderStyle}/>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
     </section>
    </div>
  )
}













