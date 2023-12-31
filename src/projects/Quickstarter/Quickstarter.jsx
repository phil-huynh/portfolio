import { useNavigate } from "react-router-dom"
import { useAnimate, usePresence } from "framer-motion"
import { useStore } from "../../Store"
import { useEffect } from "react"
import Photo from "../../Photo"
import styles from "./Quickstarter.module.css"
// import QuickstarterTools from "./Tools"
import { Grid } from "@mui/material"
import PhotoModal from "../../PhotoModal"
import EnterMicrosModal from "./EnterMicrosModal"
import GitLink from "./GitLink"


export default function Quickstarter() {

  const navigate = useNavigate()
  const {
    quickstarterPhotos: photos,
    photoModal,
    currentPhoto,
    selectPhoto,
    enterMicrosModal,
    setEnterMicrosModal,
  } = useStore()

  const [page, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const imgBorder = {
    border: "6px solid #0E0E0E",
    borderRadius: "10px",
  }

  const navigation = [
    {label: "Home", path: "/"},
    {label: "Strings Theory", path: "/strings-theory"},
    {label: "Ari Design", path: "/ecommerce"},
    {label: "mikeslist", path: "/osiris"},
    {label: "Probabilities", path: "/sales-probabilities"},
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
    <div
      className={styles.wrapper}
      key="quickstart"
      ref={page}
    >
      <div className={styles.colorfilter}></div>
      <div className="contents">
      {photoModal ?
        <PhotoModal
          image={currentPhoto.image}
          aspect={currentPhoto.aspect}
          width={currentPhoto.width}
          boxShadow={false}
        />
        :null
        }
      {enterMicrosModal ?
        <EnterMicrosModal
          photo={photos.enterMicros}
        />
        :null
        }
        <div className={styles.top}>
          <div className={styles.title}>
            <p className={styles.titleText}>Quickstarter</p>
          </div>
          {/* <QuickstarterTools/> */}
        </div>
        <GitLink />
        <div className={styles.navBar}>
          <Grid container>
            {navigation.map(nav => (
              <Grid item xs={6} sm={4} md={4} lg={2.4} key={nav.path} className={styles.navGrid}>
                <div className={`${styles.navItem}`} onClick={()=>navigate(nav.path)}>
                  <h3 className={styles.navLabel}>{nav.label}</h3>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div>



          <Grid container>
            <Grid item xs={12} sm={12} md={6}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.yamlTemplate.image,
                aspect: photos.yamlTemplate.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.yamlTemplate.image}
                aspect={photos.yamlTemplate.aspect}
                width="88%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.jsonTemplate.image,
                aspect: photos.jsonTemplate.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.jsonTemplate.image}
                aspect={photos.jsonTemplate.aspect}
                width="94%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>




          <Grid container>
            <Grid item xs={12} sm={12} md={2.8}
              className={styles.photoGridSection}
              onClick={()=>setEnterMicrosModal(true)}
            >
              <Photo
                image={photos.enterMicros.image}
                aspect={photos.enterMicros.aspect}
                width="95%"
                extras={imgBorder}
              />
            </Grid>
            <Grid container item xs={12} sm={12} md={4.3} >
              <Grid item xs={12}
                className={styles.photoGridSection}
                onClick={()=>selectPhoto({
                  image: photos.volumeAndPort.image,
                  aspect: photos.volumeAndPort.aspect,
                  width:"55%"
                })}
              >
                <Photo
                  image={photos.volumeAndPort.image}
                  aspect={photos.volumeAndPort.aspect}
                  width="90%"
                  extras={imgBorder}
                />
              </Grid>
              <Grid item xs={12}
                className={styles.photoGridSection}
                onClick={()=>selectPhoto({
                  image: photos.enterQueues.image,
                  aspect: photos.enterQueues.aspect,
                  width:"55%"
                })}
              >
                <Photo
                  image={photos.enterQueues.image}
                  aspect={photos.enterQueues.aspect}
                  width="90%"
                  extras={imgBorder}
                />
              </Grid>
              <Grid item xs={12}
                className={styles.photoGridSection}
                onClick={()=>selectPhoto({
                  image: photos.viteSetup.image,
                  aspect: photos.viteSetup.aspect,
                  width:"55%"
                })}
              >
                <Photo
                  image={photos.viteSetup.image}
                  aspect={photos.viteSetup.aspect}
                  width="90%"
                  extras={imgBorder}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={4.9}>
              <Grid item xs={12}
                className={styles.photoGridSection}
                onClick={()=>selectPhoto({
                  image: photos.portAndPollerPrompt.image,
                  aspect: photos.portAndPollerPrompt.aspect,
                  width:"55%"
                })}
              >
                <Photo
                  image={photos.portAndPollerPrompt.image}
                  aspect={photos.portAndPollerPrompt.aspect}
                  width="96%"
                  extras={imgBorder}
                />
              </Grid>
              <Grid item xs={12}
                className={styles.photoGridSection}
                onClick={()=>selectPhoto({
                  image: photos.success.image,
                  aspect: photos.success.aspect,
                  width:"55%"
                })}
              >
                <Photo
                  image={photos.success.image}
                  aspect={photos.success.aspect}
                  width="95%"
                  extras={imgBorder}
                />
              </Grid>
            </Grid>
          </Grid>




          <Grid container>
            <Grid item xs={12} sm={12} md={4}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.nameInputError.image,
                aspect: photos.nameInputError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.nameInputError.image}
                aspect={photos.nameInputError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.portNumberError.image,
                aspect: photos.portNumberError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.portNumberError.image}
                aspect={photos.portNumberError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.dupPortError.image,
                aspect: photos.dupPortError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.dupPortError.image}
                aspect={photos.dupPortError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>




          <Grid container>
          <Grid item xs={12} sm={12} md={3.75}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.inlineQueueError.image,
                aspect: photos.inlineQueueError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.inlineQueueError.image}
                aspect={photos.inlineQueueError.aspect}
                width="85%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3.75}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                aspect: photos.projectNameError.aspect,
                image: photos.projectNameError.image,
                width:"55%"
              })}
            >
              <Photo
                image={photos.projectNameError.image}
                aspect={photos.projectNameError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4.5}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.microserviceNameError.image,
                aspect: photos.microserviceNameError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.microserviceNameError.image}
                aspect={photos.microserviceNameError.aspect}
                width="96%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>




          <Grid container>
            <Grid item xs={12} sm={12} md={2.4}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.consNotAppError.image,
                aspect: photos.consNotAppError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.consNotAppError.image}
                aspect={photos.consNotAppError.aspect}
                width="91%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2.4}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.invalidAppError.image,
                aspect: photos.invalidAppError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.invalidAppError.image}
                aspect={photos.invalidAppError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2.4}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.noProducerError.image,
                aspect: photos.noProducerError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.noProducerError.image}
                aspect={photos.noProducerError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2.4}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.noConsumerError.image,
                aspect: photos.noConsumerError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.noConsumerError.image}
                aspect={photos.noConsumerError.aspect}
                width="92%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2.4}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.queueNoColonError.image,
                aspect: photos.queueNoColonError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.queueNoColonError.image}
                aspect={photos.queueNoColonError.aspect}
                width="92%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>




          <Grid container>
            <Grid item xs={12} sm={12} md={3}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.invalidMicroError.image,
                aspect: photos.invalidMicroError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.invalidMicroError.image}
                aspect={photos.invalidMicroError.aspect}
                width="96%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.missingProdMicroError.image,
                aspect: photos.missingProdMicroError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.missingProdMicroError.image}
                aspect={photos.missingProdMicroError.aspect}
                width="89%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.consNameError.image,
                aspect: photos.consNameError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.consNameError.image}
                aspect={photos.consNameError.aspect}
                width="74%"
                extras={imgBorder}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}
              className={styles.photoGridSection}
              onClick={()=>selectPhoto({
                image: photos.prodEqualsConsError.image,
                aspect: photos.prodEqualsConsError.aspect,
                width:"55%"
              })}
            >
              <Photo
                image={photos.prodEqualsConsError.image}
                aspect={photos.prodEqualsConsError.aspect}
                width="90%"
                extras={imgBorder}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}