import { useAnimate, usePresence } from "framer-motion"
import { useEffect } from "react"
import styles from "./Home.module.css"

export default function Bio() {

  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const rotateIn = async () => {
    await animate(scope.current, {rotateX: [270, 0]}, {duration: 1.7,  type: "spring", bounce: .5})
  }

  const rotateOut = async () => {
    await animate(scope.current, {rotateX: [0, 270]}, {duration: 1.2,  type: "spring", bounce: .5})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? rotateIn() : rotateOut()
  }, [isPresent])

  return (
    <div ref={scope} className={`glass ${styles.bioContainer}`}>
      <h1>hello world</h1>
    </div>
  )
}