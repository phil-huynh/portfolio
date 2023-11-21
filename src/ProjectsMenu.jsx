import { useStore } from "./Store"
import { useNavigate } from "react-router-dom";
import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";

export default function ProjectsMenu() {
  const { firstTime, setFirstTime, locate, locate2, locate3 } = useStore()
  const navigate = useNavigate()

  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const changePage = (path) => {
    firstTime && setFirstTime(false)
    navigate(path)
  }

  // const skillsTransition = firstTime ? { duration: 1, delay: 2.3 } : { duration: 1 }

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

  const rotateIn = async () => {
    await animate('section', {rotateX: [270, 0]}, {duration: 1.7,  type: "spring", bounce: .5})
  }

  const rotateOut = async () => {
    await animate('section', {rotateX: [0, 270]}, {duration: 1.2,  type: "spring", bounce: .5})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? rotateIn() : rotateOut()
  }, [isPresent])

  return (
    <div style={{...containerStyle}} ref={scope}>
      <section
        className="glass"
        style={style}
        onClick={()=>changePage("strings-theory")}
      >
        <h2 >Strings Theory</h2>
      </section>
      <section
        className="glass"
        style={style}
        onClick={()=>changePage("quickstarter")}
      >
        <h2>Quickstarter</h2>
      </section>
      <section
        className="glass"
        style={style}
        onClick={()=>changePage("sales-probabilities")}
      >
        <h2>Sales Probabilites</h2>
      </section>
      <section
        className="glass"
        style={style}
        onClick={()=>changePage("osiris")}
      >
        <h2>Osiris</h2>
      </section>
      <section
        className="glass"
        style={style}
        onClick={()=>changePage("ecommerce")}
      >
        <h2>E-Commerce</h2>
      </section>
    </div>
  )
}







