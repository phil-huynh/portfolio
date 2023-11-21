import { useNavigate } from "react-router-dom"
import { Grid, duration } from "@mui/material"
import { motion, useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect } from "react"
import Photo from "../../Photo"
import styles from "./Ecom.module.css"

export default function Ecommerce() {

  const navigate = useNavigate()
  const {locate, locate2, locate3, eCommImages} = useStore()

  const [page, animatePage] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()


  const borderStyle = {
    border: "1px gray solid",
    boxShadow: "15px 15px 12px gray"
  }

  const enterAnimation = async () => {
    await animatePage(page.current, { height: 0, width: 0})
    await animatePage(page.current, { height: "100vh", width: "100vw"}, {duration: 1.2})
  }

  const exitAnimation = async () => {
    await animatePage(page.current, {height: 0, width: 0}, {duration: 1})
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
      <div className="ecommerce-overlay"></div>
      <section className="contents">
        <div className={styles.top}>
          <div className={`glass ${styles.header}`}>
            <h1>Hello World: Ecommerce</h1>
          </div>
          <div className={`glass ${styles.header} ${styles.navItem}`} >
            <h2 onClick={()=>navigate('/')}>Home</h2>
          </div>
        </div>
        {Object.keys(eCommImages).map(section =>(
          <div key={section}>
            <h2 className={styles.sectionHeader}>{section.toUpperCase()}</h2>
            <Grid container>
              {eCommImages[section].map((image, i) => (
                <Grid
                  item
                  xs={12} sm={12} md={6} lg={3} xl={3}
                  key={`ecomImage${i}`}
                  className={styles.photoGridBox}
                >
                  <Photo image={image} width="90%" aspect="6.75/4" extras={borderStyle}/>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
     </section>
    </div>
  )
}













