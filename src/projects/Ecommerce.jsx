import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { motion } from "framer-motion"

export default function Ecommerce() {

  const navigate = useNavigate()

  const headerStyle = {
    "height": "5rem",
    "width": "50%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }

  const imageStyle = {
    "backgroundSize": "cover",
    "width": "95%",
    "margin": "1rem",
    "aspect-ratio": "6.75/4"
  }

  const images= [
    "https://media.giphy.com/media/ovB7jDDERqLsZMzp7k/giphy.gif",
    "https://media.giphy.com/media/EWbhbJQRj7WnWQYEUg/giphy.gif",
    "https://media.giphy.com/media/1lL5VlO0ZNoM97pyBr/giphy.gif",
    "https://media.giphy.com/media/569wd5FwlwKZv8V2iZ/giphy.gif",
    "https://media.giphy.com/media/pPpvR9Jhi29LZ3qGZX/giphy.gif",
    "https://media.giphy.com/media/vGCJXF0QfZTYZwwxN3/giphy.gif",
    "https://media.giphy.com/media/7jmqevBMiHwid10yVT/giphy.gif",
    "https://media.giphy.com/media/YKqzzJ5TpHe6bAgjoO/giphy.gif",
    "https://media.giphy.com/media/AWhox7RwSC75LgEJzA/giphy.gif",
    "https://media.giphy.com/media/FlGcgwYUv4j5eaHu6k/giphy.gif",
    "https://media.giphy.com/media/eqt1S1Ye859jWRHimk/giphy.gif",
    "https://media.giphy.com/media/tYKArUvD78A8bKF41L/giphy.gif",
    "https://media.giphy.com/media/LTtCBmIBEOMo4vXoQq/giphy.gif",
    "https://media.giphy.com/media/klv6Bo0sVmqFlfIb2y/giphy.gif",
    "https://media.giphy.com/media/Nw9FvcLMKHptSHYcKL/giphy.gif",
    "https://media.giphy.com/media/pPORlVOOCJWSsbtFOm/giphy.gif",
    "https://media.giphy.com/media/gF0I6akl8W0t4gguUX/giphy.gif"
  ]


  return (
    <motion.div
      className="ecommerce-wrapper"
      initial={{ height: 0, width:0 }}
      animate={{height: '100%', width: '100%'}}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3, delay: .5 }}
    >
    <div className="ecommerce-overlay"></div>
      <div className="contents">
        <div style={{ "display": "flex", "alignItems": "center", "flexDirection": "column"}}>
          <div className="glass" style={headerStyle}>
          <h1 style={{"color": "white"}}>Hello World: Ecommerce</h1>
          </div>
          <div className="glass" style={headerStyle}>
            <h2 style={{"cursor": 'pointer'}} onClick={()=>navigate('/')}>Home</h2>
          </div>
        </div>
        <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}>
        <Grid container>
          {images.map((image, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                key={`ecomImage${i}`}
              >
                <div style={{...imageStyle, "backgroundImage": `url(${image})`}} />
              </Grid>
          ))}
          </Grid>
        </div>
     </div>
    </motion.div>
  )
}













