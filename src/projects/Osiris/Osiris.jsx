import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useStore } from "../../Store"
import { useEffect } from "react"
import Photo from "../../Photo"
import styles from "./Osiris.module.css"
import PhotoModal from "../../PhotoModal"
import OsirisTools from "./Tools"
import GitLink from "./GitLink"
import { AspectRatio } from "@mui/icons-material"

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


  const navigation = [
    {label: "Home", path: "/"},
    {label: "Strings Theory", path: "/strings-theory"},
    {label: "Quickstarter", path: "/quickstarter"},
    {label: "Ari Design", path: "/ecommerce"},
  ]

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
          <div className={styles.headerItem}>
            <p className={styles.titleText}>mikeslist</p>
          </div>
          {/* <OsirisTools /> */}
        </div>
        <GitLink />
        <div className={styles.navBar}>
          <Grid container>
            {navigation.map(nav => (
              <Grid item xs={6} sm={4} md={4} lg={3} key={nav.path} className={styles.navGrid}>
                <div className={`${styles.navItem}`} onClick={()=>navigate(nav.path)}>
                  <h2 className={styles.navLabel}>{nav.label}</h2>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={styles.infoContainer}>
          <Grid container>
            <Grid
              item
              xs={12} sm={12} md={12} lg={6} xl={4}
              sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
            >
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
              container xs={12} sm={12} md={12} lg={6} xl={8}
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
            </Grid>
          </Grid>

{/* ============================================ */}

          <Grid container sx={{width: "100%", marginTop: "2rem"}}>
            <Grid item container xs={12} sm={12} md={12} lg={6} xl={8} order={{ xs: 2, sm: 2, md: 2, lg: 1, xl: 1}}>
              <Grid
                item
                xs={12} sm={5.2} md={2.4} lg={2.4} xl={2.4}
                className={styles.gridSection}
                onClick={()=>(
                  selectPhoto({
                    image: ph.mobileFeed.image,
                    aspect: ph.mobileFeed.aspect,
                    width: "25%"
                  })
                )}
                >
                <Photo image={ph.mobileFeed.image} aspect={ph.mobileFeed.aspect} width="82%" extras={extras}/>
              </Grid>
              <Grid
                item
                xs={12} sm={6.8} md={3.1} lg={3.1} xl={3.1}
                className={styles.gridSection}
                onClick={()=>(
                  selectPhoto({
                    image: ph.tabletFeed.image,
                    aspect: ph.tabletFeed.aspect,
                    width: "40%"
                  })
                )}
                >
                <Photo image={ph.tabletFeed.image} aspect={ph.tabletFeed.aspect} width="95%" extras={extras}/>
              </Grid>
              <Grid
                item
                xs={12} sm={12} md={6.5} lg={6.5} xl={6.5}
                className={styles.gridSection}
                onClick={()=>(
                  selectPhoto({
                    image: ph.desktopFeed.image,
                    aspect: ph.desktopFeed.aspect,
                    width: "80%"
                  })
                )}
                >
                <Photo image={ph.desktopFeed.image} aspect={ph.desktopFeed.aspect} width="96%" extras={extras}/>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12} sm={12} md={12} lg={6} xl={4}
              order={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2}}
              sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
            >
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

{/* ============================================ */}


          <Grid container>
            <Grid
              item
              xs={12} sm={12} md={12} lg={6} xl={4}
              sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
            >
              <p style={{
                  color: "black",
                  fontSize: "1.7rem",
                  fontWeight: "450"
                }}
                >
                  Items can be searched or they can be filtered by pickup/delivery options, categories, or location on the map. Items can also be sorted by date or distance.
              </p>
            </Grid>
            <Grid
              item
              container xs={12} sm={12} md={12} lg={6} xl={8}
              style={{
                overflowX: "scroll"
              }}
            >
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="searchBarFilter"
                onClick={()=>(
                  selectPhoto({
                    image: ph.searchBarFilter.image,
                    aspect: ph.searchBarFilter.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.searchBarFilter.image} aspect={ph.searchBarFilter.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="pickUpOrDeliveryFilter"
                onClick={()=>(
                  selectPhoto({
                    image: ph.pickUpOrDeliveryFilter.image,
                    aspect: ph.pickUpOrDeliveryFilter.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.pickUpOrDeliveryFilter.image} aspect={ph.pickUpOrDeliveryFilter.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="categoryFilter"
                onClick={()=>(
                  selectPhoto({
                    image: ph.categoryFilter.image,
                    aspect: ph.categoryFilter.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.categoryFilter.image} aspect={ph.categoryFilter.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="mapFilter"
                onClick={()=>(
                  selectPhoto({
                    image: ph.mapFilter.image,
                    aspect: ph.mapFilter.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.mapFilter.image} aspect={ph.mapFilter.aspect} width="80%" extras={extras} />
              </Grid>
            </Grid>
          </Grid>





          <Grid container>
            <Grid
              item
              container xs={12} sm={12} md={12} lg={7} xl={9}
              order={{ xs: 2, sm: 2, md: 2, lg: 1,xl: 1}}
              style={{
                overflowX: "scroll"
              }}
            >
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="itemPage"
                onClick={()=>(
                  selectPhoto({
                    image: ph.itemPage.image,
                    aspect: ph.itemPage.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.itemPage.image} aspect={ph.itemPage.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="askAQuestion"
                onClick={()=>(
                  selectPhoto({
                    image: ph.askAQuestion.image,
                    aspect: ph.askAQuestion.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.askAQuestion.image} aspect={ph.askAQuestion.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="askAQuestion2"
                onClick={()=>(
                  selectPhoto({
                    image: ph.askAQuestion2.image,
                    aspect: ph.askAQuestion2.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.askAQuestion2.image} aspect={ph.askAQuestion2.aspect} width="80%" extras={extras} />
              </Grid>
              <Grid
                item
                xs={12} sm={3} md={3} lg={3} xl={3}
                className={styles.gridSection}
                key="editPost"
                onClick={()=>(
                  selectPhoto({
                    image: ph.editPost.image,
                    aspect: ph.editPost.aspect,
                    width: "25%"
                  })
                )}
              >
                <Photo image={ph.editPost.image} aspect={ph.editPost.aspect} width="80%" extras={extras} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12} sm={12} md={12} lg={5} xl={3}
              order={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2}}
              sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
            >
              <p style={{
                  color: "black",
                  fontSize: "1.7rem",
                  fontWeight: "450"
                }}
                >
                  The item page displays a carousel of the item photos. The user can choose a photo or let the carousel cycle through them automatically. Users can also post a question about an item that the poster can answer or they can report any posts that cause concern. Users can also contact the poster via direct message in a live chat. The donation location is displayed on a map on each item page. A post can be edited or deleted by the user who created it.
              </p>
            </Grid>
          </Grid>



          <div
            style={{width: "19%", aspectRatio: ph.publicFeed.aspect, cursor: "pointer"}}
            onClick={()=>(
              selectPhoto({
                image: ph.publicFeed.image,
                aspect: ph.publicFeed.aspect,
                width: "25%"
              })
            )}
          >
            <Photo
              image={ph.publicFeed.image}
              aspect={ph.publicFeed.aspect}
              width="100%"
              extras={extras}
            />
          </div>
          <div
            style={{width: "19%", aspectRatio: ph.userPage.aspect, cursor: "pointer"}}
            onClick={()=>(
              selectPhoto({
                image: ph.userPage.image,
                aspect: ph.userPage.aspect,
                width: "25%"
              })
            )}
          >
            <Photo
              image={ph.userPage.image}
              aspect={ph.userPage.aspect}
              width="100%"
              extras={extras}
            />
          </div>
          <div
            style={{width: "60%", aspectRatio: ph.userPage.aspect, cursor: "pointer"}}
            onClick={()=>(
              selectPhoto({
                image: ph.itemPageDesktop.image,
                aspect: ph.itemPageDesktop.aspect,
                width: "80%"
              })
            )}
          >
            <Photo
              image={ph.itemPageDesktop.image}
              aspect={ph.itemPageDesktop.aspect}
              width="100%"
              extras={extras}
            />
          </div>
        </div>
      </div>
    </div>
  )
}










