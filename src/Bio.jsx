import { motion } from "framer-motion"

export default function Bio() {

  const style = {
    width: "95%",
    height: "100%",
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

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

  return (
    <motion.div
      className="glass"
      style={style}
      variants={glassVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>hello world</h1>
    </motion.div>
  )
}