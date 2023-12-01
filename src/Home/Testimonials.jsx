import { useAnimate, usePresence, stagger } from "framer-motion"
import { useEffect } from "react"
import styles from "./Home.module.css"

export default function Testimonials() {

  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  const rotateIn = async () => {
    await animate(
      "blockquote",
      {rotateX: [90, 0]},
      {
        duration: .9,
        delay: stagger(.3),
        type: "spring",
        bounce: .2
      }
    )
  }

  const rotateOut = async () => {
    await animate(scope.current, {rotateX: [0, 90]}, {duration: .7})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? rotateIn() : rotateOut()
  }, [isPresent])

  return (
    <div ref={scope} className={styles.recommendationsContainer}>
      <blockquote className={styles.recommendation}>
        <p className={styles.quoteSection}>
          "Phil would be a solid addition to any software development team.
        </p>
        <p className={styles.quoteSection}>
          I’ve had the opportunity to now work with Phil twice. Each time I work with him, I am impressed by his solid understanding of code, his willingness to work with others, and his collaborative nature to life up his team. Even under stressful deadlines, Phil maintains a can-do disposition and a sharp acumen. I’d happily work with Phil in the future!"
        </p>

      </blockquote>

      <blockquote className={styles.recommendation}>
        <p className={styles.quoteSection}>
          "Phil is absolutely amazing at 2 things. Coding and Communicating. From helping me understand concepts to debugging any issues I created in my projects Phil was always there to lend a helping ear or hand.
        </p>
        <p className={styles.quoteSection}>
          Galvanize is absolutely lucky to have Phil as part of their program as would any organization that needs a dedicated team player that understands how to solve business problems via code.

        </p>
        <p className={styles.quoteSection}>
          I know myself and many other students wouldn't be half as successful if it wasn't for the help, guidance, and mentorship Phil provided us and continues to provide us.

        </p>
        <p className={styles.quoteSection}>
          Phil is truly the goat of Galvanize."
        </p>
      </blockquote>

      <blockquote className={styles.recommendation}>
        <p className={styles.quoteSection}>
          "I had the privilege of learning from Phil as a student on the software development team at Galvanize, which was a fantastic experience for my career in software development. He possesses a profound understanding of software engineering concepts and an innate ability to convey complex ideas in a clear and accessible manner. His teaching style is not only engaging but also tailored to meet the needs of each student, ensuring that everyone, regardless of their prior experience, can grasp the material.
        </p>
        <p className={styles.quoteSection}>
          Phil's commitment to his students' education truly sets him apart. He encourages students to question, explore new technologies, and think critically about software design and architecture. He always goes the extra mile to provide guidance, whether through one-on-one mentoring or creating additional resources to aid our understanding.
        </p>
        <p className={styles.quoteSection}>
          In addition to his technical expertise, Phil's professionalism, punctuality, approachability, and passion for his work motivate everyone around him. He creates a supportive and inclusive environment where students feel valued and empowered to excel. I'm grateful to have studied alongside Phil, and I'm confident he'll excel in any software engineering role he takes on!"
        </p>
      </blockquote>
    </div>
  )
}