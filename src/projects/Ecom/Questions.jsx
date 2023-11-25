import { Grid } from "@mui/material"
import { useStore } from "../../Store"
import { useEffect, useState } from "react"
import Photo from "../../Photo"
import styles from "./Ecom.module.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Questions({ carousels, numberShowing, cycleLeft, cycleRight, extras, arrowStyle}) {

  const { selectPhoto } = useStore()

  return (
    <div>
    <h2 className={styles.sectionHeader}>Questions</h2>
    <ul style={{color: "black", textAlign: "left", fontSize: "1.4rem", marginLeft: "5rem"}}>
      <li>
      Search bar dynamically filters questions. Users can ask a question or add an answer to an existing question.
      </li>
      <li>
      The question list for each product and each answer list can be expanded and collapsed
      </li>
      <li>
      Clicking Helpful for a question or an answer will dynamically increment the helpful count. If a question or answer is reported, it will be removed on the next re-render.
      </li>
    </ul>
    <Grid container>
        <Grid
          item
          sx={{display: "flex", alignItems: "center"}}
          xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
        >
        <NavigateBeforeIcon
          xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
          className={styles.arrow}
          sx={{color: "black", fontSize: "7rem"}}
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
          <div className={styles.cardOverlay}><span className={styles.cardNumber}>{photo.number}</span></div>
        </Grid>
      ))}
      <Grid
        item
        sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
        xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
      >
        <NavigateNextIcon
          sx={arrowStyle}
          onClick={()=>cycleRight('questions')}
        />
      </Grid>
    </Grid>
  </div>
  )
}