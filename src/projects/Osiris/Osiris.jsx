import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useStore } from "../../Store"
import { useEffect } from "react"
import Photo from "../../Photo"
import styles from "./Osiris.module.css"
import PhotoModal from "../../PhotoModal"

export default function Osiris() {

  const navigate = useNavigate()

  const {
    osirisImages: ph,
    currentPhoto,
    photoModal,
    selectPhoto,
    locate,
    locate2,
    locate3,
    getSize,
    isXL,
    isLG,
    isMD,
    isSM,
    isXS
  } = useStore()


  const extras = {
    boxShadow: "15px 15px 12px #1E1E1E",
    marginTop: "1rem",
    marginBottom: "1rem",
  }

  useEffect(() =>{
    console.log(getSize())
  }, [isXL, isLG, isMD, isSM, isXS])

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
            <Grid item xs={12} sm={12} md={12} lg={4} xl={2}>
              <p style={{
                  color: "black",
                  fontSize: "1.7rem",
                  fontWeight: "450"
                }}
                >
                  If a user doesn't have an account, they can register as a donor or a charity. If the user forgets their password, they can click the link to reset it. Users without a correct login/password cannot enter the site. Proper login will direct the user to the public feed.
              </p>
            </Grid>
            <Grid
              item
              container xs={12} sm={12} md={12} lg={8} xl={10}
              style={{
                overflowX: "scroll"
              }}
            >
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="signup"
                onClick={()=>(
                  selectPhoto({
                    image: ph.signup.image,
                    aspect: ph.signup.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.signup.image} aspect={ph.signup.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="forgotPassword"
                onClick={()=>(
                  selectPhoto({
                    image: ph.forgotPassword.image,
                    aspect: ph.forgotPassword.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.forgotPassword.image} aspect={ph.forgotPassword.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="failedLogin"
                onClick={()=>(
                  selectPhoto({
                    image: ph.failedLogin.image,
                    aspect: ph.failedLogin.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.failedLogin.image} aspect={ph.failedLogin.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="sucessfulLogin"
                onClick={()=>(
                  selectPhoto({
                    image: ph.successfulLogin.image,
                    aspect: ph.successfulLogin.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.successfulLogin.image} aspect={ph.successfulLogin.aspect} width="80%" extras={extras} />
              </Grid>
            </Grid>
          </Grid>

          <Grid container sx={{width: "100%", marginTop: "2rem"}}>
            <Grid item container xs={12} sm={12} md={12} lg={8} xl={10}  order={{ xs: 2, sm: 2, md: 2, lg: 1,xl: 1}}>
              <Grid
                item
                xs={12} sm={5.2} md={2.4} lg={2.4} xl={2.4}
                className={styles.gridSection}
              >
                <Photo image={ph.mobileFeed.image} aspect={ph.mobileFeed.aspect} width="82%" extras={extras}/>
              </Grid>
              <Grid
                item
                xs={12} sm={6.8} md={3.1} lg={3.1} xl={3.1}
                className={styles.gridSection}
              >
                <Photo image={ph.tabletFeed.image} aspect={ph.tabletFeed.aspect} width="95%" extras={extras}/>
              </Grid>
              <Grid
                item
                xs={12} sm={12} md={6.5} lg={6.5} xl={6.5}
                className={styles.gridSection}
              >
                <Photo image={ph.desktopFeed.image} aspect={ph.desktopFeed.aspect} width="96%" extras={extras}/>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={2} order={{ md: 1, lg: 2}}>
            <p style={{
                  color: "black",
                  fontSize: "1.7rem",
                  fontWeight: "450"
                }}
                >
                  The feed will render differently for various screen sizes. The following examples show the application as rendered on a Samsung phone, an iPad, and a laptop.
              </p>
            </Grid>
          </Grid>

          {/* <Grid container>
            {photos.mobile.map((photo, i) => (
              <Grid
                item
                xs={6} sm={6} md={3} lg={2} xl={2}
                className={styles.gridSection}
                key={`mobileImage${i}`}
                onClick={()=>selectPhoto({image: photo.image, aspect: photo.aspect, width: "25%" })}
              >
                <Photo image={photo.image} width="80%" aspect={photo.aspect} extras={extras}/>
              </Grid>
            ))}
          </Grid>
          <Photo image={photos.tablet.image} width="35%" aspect={photos.tablet.aspect} extras={extras}/>
          <Grid container>
            {photos.desktop.map((photo, i) => (
              <Grid
                item
                xs={12} sm={10} md={10} lg={6} xl={6}
                className={styles.gridSection}
                key={`desktopImage${i}`}
              >
                <Photo image={photo.image} width="90%" aspect={photo.aspect} extras={extras}/>
              </Grid>
            ))}
          </Grid> */}
        </div>
      </div>
    </div>
  )
}










