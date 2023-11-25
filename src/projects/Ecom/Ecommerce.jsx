import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect, useState } from "react"
import Photo from "../../Photo"
import styles from "./Ecom.module.css"
import PhotoModal from "../../PhotoModal"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Ecommerce() {

  const navigate = useNavigate()
  const {locate, locate2, locate3, eCommImages, selectPhoto, photoModal, currentPhoto} = useStore()

  // const [ overviewPhotos, setOverviewPhotos ] = useState([ ...eCommImages.overview ])
  // const [ questionsPhotos, setQuestionsPhotos ] = useState([ ...eCommImages.questions ])
  // const [ reviewsPhotos, setReviewsPhotos ] = useState([ ...eCommImages.reviews ])

  const [numberShowing, setNumberShowing] = useState(4)

  const [ carousels, setCarousels ] = useState(
    {
      overviewPhotos: [...eCommImages.overview],
      questionsPhotos: [...eCommImages.questions],
      reviewsPhotos: [...eCommImages.reviews]
    }
  )

  const cycleLeft = (section) => {
    const prev = carousels[`${section}Photos`]
    setCarousels(
      {
        ...carousels,
        [`${section}Photos`]: [...prev.slice(1), prev[0]]
      }
    )
  }

  const cycleRight = (section) => {
    const prev = carousels[`${section}Photos`]
    const lastIndex = prev.length - 1
    setCarousels(
      {
        ...carousels,
        [`${section}Photos`]: [ prev[lastIndex], ...prev.slice(0, lastIndex)]
      }
    )
  }


  const [page, animatePage] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()


  const extras = {
    boxShadow: "15px 15px 12px #1E1E1E",
    marginTop: "1rem",
    marginBottom: "1rem",
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



        <div>
          <h2 className={styles.sectionHeader}>OVERVIEW</h2>
          <Grid container>
              <Grid
                item
                sx={{display: "flex", alignItems: "center"}}
                xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
              >
              <NavigateBeforeIcon
                xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
                sx={{color: "black", fontSize: "7rem", cursor: "pointer"}}
                onClick={()=>cycleLeft('overview')}
              />
            </Grid>
            {carousels.overviewPhotos.slice(0, numberShowing).map((photo, i) => (
              <Grid
              item
              xs={12} sm={11/numberShowing} md={11/numberShowing} lg={11/numberShowing} xl={11/numberShowing}
              key={`overviewImage${i}`}
              className={styles.photoGridBox}
              onClick={()=>selectPhoto({image: photo.image, aspect: photo.aspect, width: "70%" })}
              >
                <Photo image={photo.image} width="90%" aspect={photo.aspect} extras={extras}/>
              </Grid>
            ))}
            <Grid
              item
              sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
              xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
            >
              <NavigateNextIcon
                sx={{color: "black", fontSize: "7rem", cursor: "pointer"}}
                onClick={()=>cycleRight('overview')}
              />
            </Grid>
          </Grid>
        </div>


        <div>
          <h2 className={styles.sectionHeader}>Questions</h2>
          <Grid container>
              <Grid
                item
                sx={{display: "flex", alignItems: "center"}}
                xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
              >
              <NavigateBeforeIcon
                xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
                sx={{color: "black", fontSize: "7rem", cursor: "pointer"}}
                onClick={()=>cycleLeft('questions')}
              />
            </Grid>
            {carousels.questionsPhotos.slice(0, numberShowing).map((photo, i) => (
              <Grid
              item
              xs={12} sm={11/numberShowing} md={11/numberShowing} lg={11/numberShowing} xl={11/numberShowing}
              key={`questionsImage${i}`}
              className={styles.photoGridBox}
              onClick={()=>selectPhoto({image: photo.image, aspect: photo.aspect, width: "70%" })}
              >
                <Photo image={photo.image} width="90%" aspect={photo.aspect} extras={extras}/>
              </Grid>
            ))}
            <Grid
              item
              sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
              xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
            >
              <NavigateNextIcon
                sx={{color: "black", fontSize: "7rem", cursor: "pointer"}}
                onClick={()=>cycleRight('questions')}
              />
            </Grid>
          </Grid>
        </div>



        <div>
          <h2 className={styles.sectionHeader}>Reviews</h2>
          <Grid container>
              <Grid
                item
                sx={{display: "flex", alignItems: "center"}}
                xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
              >
              {/* <NavigateBeforeIcon
                sx={{color: "black", fontSize: "7rem", cursor: "pointer"}}
                onClick={()=>cycleLeft('questions')}
              /> */}
            </Grid>
            {carousels.reviewsPhotos.slice(0, numberShowing).map((photo, i) => (
              <Grid
              item
              xs={12} sm={11/numberShowing} md={11/numberShowing} lg={11/numberShowing} xl={11/numberShowing}
              key={`reviewsImage${i}`}
              className={styles.photoGridBox}
              onClick={()=>selectPhoto({image: photo.image, aspect: photo.aspect, width: "70%" })}
              >
                <Photo image={photo.image} width="90%" aspect={photo.aspect} extras={extras}/>
              </Grid>
            ))}
            <Grid
              item
              sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
              xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
            >
              {/* <NavigateNextIcon
                sx={{color: "black", fontSize: "7rem", cursor: "pointer"}}
                onClick={()=>cycleRight('questions')}
              /> */}
            </Grid>
          </Grid>
        </div>



        {/* {Object.keys(eCommImages).map(section =>(
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
                  <Photo image={photo.image} width="90%" aspect={photo.aspect} extras={extras}/>
                </Grid>
              ))}
            </Grid>
          </div>
        ))} */}
     </section>
    </div>
  )
}













