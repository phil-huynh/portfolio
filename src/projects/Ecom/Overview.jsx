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
      <h2 className={styles.sectionHeader}>OVERVIEW</h2>
      <ul style={{color: "black", textAlign: "left", fontSize: "1.4rem", marginLeft: "5rem"}}>
        <li>
        Page dynamically re-renders when a different product is selected.
        </li>
        <li>
        Users can cycle through the photo carousel using the arrows or by clicking on a photo directly. They can also choose from multiple styles for each available item.

        </li>
        <li>
        Users can zoom in on an item's photos. Photos can be cycled through while in zoom mode.
        </li>
        <li>
        Choosing a size dynamically updates the quanity menu to reflect the current quantity available. Users can share their favorite items on Facebook, Twitter, or Pintrest.
        </li>
      </ul>
      <Grid container>
          <Grid
            item
            className={styles.arrowGrid}
            xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
          >
          <NavigateBeforeIcon
            xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
            sx={arrowStyle}
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
            <div className={styles.cardOverlay}><span className={styles.cardNumber}>{photo.number}</span></div>
          </Grid>
        ))}
        <Grid
          item
          className={styles.arrowGrid}
          xs={.5} sm={.5} md={.5} lg={.5} xl={.5}
        >
          <NavigateNextIcon
            sx={arrowStyle}
            onClick={()=>cycleRight('overview')}
          />
        </Grid>
      </Grid>
    </div>
  )
}