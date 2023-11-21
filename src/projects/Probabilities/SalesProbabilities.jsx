import { useNavigate } from "react-router-dom"
import styles from "./Probabilities.module.css"

export default function SalesProbabilities() {

  const navigate = useNavigate()

  const headerStyle = {
    height: "5rem",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <div className={styles.wrapper}>
      <div className="contents">
        <div style={{ "display": "flex", "alignItems": "center", "flexDirection": "column"}}>
          <div className="glass" style={headerStyle}>
          <h1 style={{"color": "white"}}>Hello World: Sales Probabilities</h1>
          </div>
          <div className="glass" style={headerStyle}>
            <h2 style={{"cursor": 'pointer'}} onClick={()=>navigate('/')}>Home</h2>
          </div>
        </div>
        <div style={{"display": "flex", "justifyContent": "space-around",  "flexWrap": "wrap"}}></div>
     </div>
    </div>
  )
}





