import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { useStore } from "../Store"
import Photo from "../Photo"

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
                xs={6} sm={6} md={3} lg={2} xl={2}
                style={gridStyle}
                key={`mobileImage${i}`}
              >
                <Photo image={image} width="80%" aspect="2.5/4.75"/>
              </Grid>
            ))}
          </Grid>
          <Photo image={photos.tablet} width="50%" aspect={"3.5/4.5"}/>
          <Grid container>
            {photos.desktop.map((image, i) => (
              <Grid
                item
                xs={12} sm={10} md={10} lg={6} xl={6}
                style={gridStyle}
                key={`desktopImage${i}`}
              >
                <Photo image={image} width="95%" aspect="6.3/3.75" />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}










