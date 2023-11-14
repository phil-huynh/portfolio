import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"

export default function Osiris() {

  const navigate = useNavigate()

  const mobileImages = [
    "https://media.giphy.com/media/HPt5OekCz5XZR5GLpN/giphy.gif",
    "https://media.giphy.com/media/35TeChHRBB1Zc7e3ew/giphy.gif",
    "https://media.giphy.com/media/fIuud07btnCNoKRVmb/giphy.gif",
    "https://media.giphy.com/media/H47rgIuBFw7g0iIG1V/giphy.gif",
    "https://media.giphy.com/media/9BtupnUJlFLHMYUqKP/giphy.gif",
    "https://media.giphy.com/media/c8qLLR7SJTNCf4J16u/giphy.gif",
    "https://media.giphy.com/media/mFelNZeuET2CKmok0A/giphy.gif",
    "https://media.giphy.com/media/zhBSjaqLXsviVvOkCQ/giphy.gif",
    "https://media.giphy.com/media/80BvP34vS4esPPCqWI/giphy.gif",
    "https://media.giphy.com/media/2yPiSAunimoAPlP7Ta/giphy.gif",
    "https://media.giphy.com/media/zsPCksYyhZXivc1oMt/giphy.gif",
    "https://media.giphy.com/media/lNp0gwsXUP6gdUqqsm/giphy.gif",
    "https://media.giphy.com/media/zsPCksYyhZXivc1oMt/giphy.gif",
  ]

  const tabletImage = "https://media.giphy.com/media/5Diu7UQyjYdrgMCN6X/giphy.gif"

  const desktopImages= [
    "https://media.giphy.com/media/0Mm6noiioGANaMbS8n/giphy.gif",
    "https://media.giphy.com/media/Tu0zkb61zEYkJN4VE6/giphy.gif"
  ]

  const headerStyle = {
    "height": "5rem",
    "width": "50%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }


  const mobileImageStyle ={
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "width": "95%",
    "margin": "1rem",
    "aspect-ratio": "2.5/4.75"
  }

  const tabletImageStyle ={
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "width": "50%",
    "margin": "1rem",
    "aspect-ratio": "3.5/4.5"
  }

  const desktopImageStyle ={
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "width": "95%",
    "margin": "1rem",
    "aspect-ratio": "6.3/3.75"
  }

  const gridStyle = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  }

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
          {mobileImages.map((image, i) => (
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
        <div style={{...tabletImageStyle, "backgroundImage": `url(${tabletImage})`}} />
        <Grid container>
          {desktopImages.map((image, i) => (
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










