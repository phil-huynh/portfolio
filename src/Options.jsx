import { useStore } from "./Store";
import TechIcons from "./TechIcons";
import ProjectsMenu from "./ProjectsMenu";
import Bio from "./Bio";

export default function Options() {
  const { selection } = useStore()

  if (selection === 'skills') return <TechIcons/>
  if (selection === 'projects') return <ProjectsMenu/>
  if (selection === 'bio') return <Bio/>
}