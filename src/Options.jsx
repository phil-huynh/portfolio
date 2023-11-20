import { useStore } from "./Store";
import TechIcons from "./TechIcons";
import ProjectsMenu from "./ProjectsMenu";
import Bio from "./Bio";
import { AnimatePresence } from "framer-motion";

export default function Options() {
  const { selection } = useStore()

  return (
    <AnimatePresence>
      {selection === 'skills' ? <TechIcons/>
        : selection === 'projects' ? <ProjectsMenu/>
          : selection === 'bio' ? <Bio/>
            :null
      }
    </AnimatePresence>
  )
}