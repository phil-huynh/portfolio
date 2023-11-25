import { Grid } from "@mui/material"
import { useStore } from "../../Store"
import { useEffect, useState } from "react"
import Photo from "../../Photo"
import styles from "./Ecom.module.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Reviews({ carousels, numberShowing, cycleLeft, cycleRight, extras, arrowStyle}) {

  const { selectPhoto } = useStore()

  return (
    <div>
      <h2 className={styles.sectionHeader}>Reviews</h2>
      <ul style={{color: "black", textAlign: "left", fontSize: "1.4rem", marginLeft: "5rem"}}>
        <li>
        Users can add a review to a product. They can also mark a review as helpful to increment the helpfulness count or report a review.
        </li>
        <li>
        Reviews can be sorted by relevance, helpfulness, or date posted. The reviews list can be expanded to show more reviews.
        </li>
      </ul>
      <Grid container>
          <Grid
            item
            sx={{display: "flex", alignItems: "center"}}
            xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
          >
          {/* <NavigateBeforeIcon
            sx={arrowStyle}
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
            sx={arrowStyle}
            onClick={()=>cycleRight('questions')}
          /> */}
        </Grid>
      </Grid>
    </div>
  )
}