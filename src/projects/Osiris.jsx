import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useStore } from "../Store"

export default function Osiris() {

  const navigate = useNavigate()

  const { osirisImages: photos } = useStore()

  const centerContent = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  }

  const headerStyle = {
    "height": "5rem",
    "width": "50%",
    ...centerContent
  }

  const imageStyle = {
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "margin": "1rem",
  }

  const mobileImageStyle ={
    ...imageStyle,
    "width": "95%",
    "aspectRatio": "2.5/4.75"
  }

  const tabletImageStyle ={
    ...imageStyle,
    "width": "50%",
    "aspect-ratio": "3.5/4.5"
  }

  const desktopImageStyle ={
    ...imageStyle,
    "width": "95%",
    "aspect-ratio": "6.3/3.75"
  }

  const gridStyle = centerContent

  return (
    <div className="osiris-wrapper">
    <div className="osiris-overlay"></div>
      <div className="contents">
        <div style={{ "display": "flex", "alignItems": "center", "flexDirection": "column"}}>
          <div className="glass" style={headerStyle}>
          <h1 style={{"color": "white"}}>Hello World: Osiris</h1>
          </div>
          <div className="glass" style={headerStyle}>
            <h2 style={{"cursor": 'pointer'}} onClick={()=>navigate('/')}>Home</h2>
          </div>
        </div>
        <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}>
        <Grid container>
          {photos.mobile.map((image, i) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                lg={2}
                xl={2}
                style={gridStyle}
                key={`mobileImage${i}`}
              >
                <div style={{...mobileImageStyle, "backgroundImage": `url(${image})`}} />
              </Grid>
          ))}
        </Grid>
        <div style={{...tabletImageStyle, "backgroundImage": `url(${photos.tablet})`}} />
        <Grid container>
          {photos.desktop.map((image, i) => (
              <Grid
                item
                xs={12}
                sm={10}
                md={10}
                lg={6}
                xl={6}
                style={gridStyle}
                key={`desktopImage${i}`}
              >
                <div style={{...desktopImageStyle, "backgroundImage": `url(${image})`}} />
              </Grid>
          ))}
          </Grid>
          <div></div>
        </div>
     </div>
    </div>
  )
}










