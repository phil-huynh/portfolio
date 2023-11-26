import { useNavigate } from "react-router-dom"
import { useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect, useState } from "react"
import styles from "./Ecom.module.css"
import PhotoModal from "../../PhotoModal"
import Questions from "./Questions"
import Overview from "./Overview"
import Reviews from "./Reviews"
import EcomTools from "./Tools"

export default function Ecommerce() {

  const navigate = useNavigate()
  const { eCommImages, selectPhoto, photoModal, currentPhoto } = useStore()

  const [numberShowing, setNumberShowing] = useState(4)

  const [ carousels, setCarousels ] = useState(
    {
      overviewPhotos: [...eCommImages.overview],
      questionsPhotos: [...eCommImages.questions],
      reviewsPhotos: [...eCommImages.reviews]
    }
  )

  const cycleRight = (section) => {
    const prev = carousels[`${section}Photos`]
    setCarousels(
      {
        ...carousels,
        [`${section}Photos`]: [...prev.slice(1), prev[0]]
      }
    )
  }

  const cycleLeft = (section) => {
    const prev = carousels[`${section}Photos`]
    const lastIndex = prev.length - 1
    setCarousels(
      {
        ...carousels,
        [`${section}Photos`]: [ prev[lastIndex], ...prev.slice(0, lastIndex)]
      }
    )
  }


  const arrowStyle = {
    color: "black",
    fontSize: "7rem",
    cursor: "pointer",
    "&:hover":{
      color: "red"
    }
  }

  const [page, animatePage] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()


  const extras = {
    boxShadow: "15px 15px 12px #1E1E1E",
    marginTop: "1rem",
    marginBottom: "1rem",
  }

  const enterAnimation = async () => {
    await animatePage(
      page.current,
      {
        height: 0,
        width: 0
    }
  )
    await animatePage(
      page.current,
      {
        height: "100vh",
        width: "100vw"}, {duration: 1.2
      }
    )
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
            <h1>Ecommerce</h1>
          </div>
          <div className={`glass ${styles.navItem}`} onClick={()=>navigate('/')}>
            <h2>Home</h2>
          </div>
          <EcomTools/>
        </div>

        <Overview
          carousels={carousels}
          numberShowing={numberShowing}
          cycleLeft={cycleLeft}
          cycleRight={cycleRight}
          extras={extras}
          arrowStyle={arrowStyle}
        />

        <Questions
          carousels={carousels}
          numberShowing={numberShowing}
          cycleLeft={cycleLeft}
          cycleRight={cycleRight}
          extras={extras}
          arrowStyle={arrowStyle}
        />

        <Reviews
          carousels={carousels}
          numberShowing={numberShowing}
          cycleLeft={cycleLeft}
          cycleRight={cycleRight}
          extras={extras}
          arrowStyle={arrowStyle}
        />
      </section>
    </div>
  )
}













