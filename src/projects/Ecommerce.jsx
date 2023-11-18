import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useStore } from "../Store"
import Photo from "../Photo"

export default function Ecommerce() {

  const navigate = useNavigate()
  const {locate, locate2, locate3, eCommImages} = useStore()

  const headerStyle = {
    "height": "5rem",
    "width": "50%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }

  const borderStyle = {
    "border": "1px gray solid",
    "boxShadow": "15px 15px 12px gray"
  }

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
        {Object.keys(eCommImages).map(section =>(
          <div key={section}>
            <h2 style={{"color": "black"}}>{section.toUpperCase()}</h2>
            <Grid container>
              {eCommImages[section].map((image, i) => (
                <Grid
                  item
                  xs={12} sm={12} md={6} lg={3} xl={3}
                  key={`ecomImage${i}`}
                  style={{"display": "flex", "placeContent": "center", }}
                >
                  <Photo image={image} width="90%" aspect="6.75/4" extras={borderStyle}/>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
     </div>
    </motion.div>
  )
}













