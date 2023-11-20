import { useStore } from "./Store"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsMenu() {
  const { firstTime, setFirstTime, locate, locate2, locate3 } = useStore()
  const navigate = useNavigate()

  const changePage = (path) => {
    firstTime && setFirstTime(false)
    navigate(path)
  }

  // const skillsTransition = firstTime ? { duration: 1, delay: 2.3 } : { duration: 1 }

  const glassVariants = {
    hidden: { rotateX: 90},
    visible: {
      rotateX: 0 ,
      transition: { duration: 1.5}
    },
    exit: {
      rotateX: 90 ,
      transition: { duration: 1.5 }
    }
  }

  const containerStyle ={
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }

  const style = {
    "cursor": "pointer",
    width: "70%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    // marginBottom: "1rem",
  }

  return (
    <motion.div style={{...containerStyle}}>
      <motion.div
        className="glass"
        variants={glassVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={style}
        onClick={()=>changePage("strings-theory")}
      >
        <h2 >Strings Theory</h2>
      </motion.div>
      <motion.div
        className="glass"
        variants={glassVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={style}
        onClick={()=>changePage("quickstarter")}
      >
        <h2>Quickstarter</h2>
      </motion.div>
      <motion.div
        className="glass"
        variants={glassVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={style}
        onClick={()=>changePage("sales-probabilities")}
      >
        <h2>Sales Probabilites</h2>
      </motion.div>
      <motion.div
        className="glass"
        variants={glassVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={style}
        onClick={()=>changePage("osiris")}
      >
        <h2>Osiris</h2>
      </motion.div>
      <motion.div
        className="glass"
        variants={glassVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={style}
        onClick={()=>changePage("ecommerce")}
      >
        <h2>E-Commerce</h2>
      </motion.div>
    </motion.div>
  )
}







