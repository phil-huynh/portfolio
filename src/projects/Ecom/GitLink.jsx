import GitHubIcon from "../../tech_icons/GitHubIcon"
import styles from "./Ecom.module.css"

export default function GitLink({ side }) {
  let link;
  if (side === 'front') link = "https://github.com/Ari-Design/Modern-Shopping-Site"
  if (side === 'back') link = "https://github.com/orgs/Team-Ferdinand/repositories"

  return (
    <div style={{width: "30%", display: "flex", justifyContent: "center"}}>
      <a href={link} >
        <div className={styles.linkButton}>
            <p className={styles.gitLinkText}>{`View the ${side} end code`}</p>
            <GitHubIcon width={"3.5rem"}/>
        </div>
      </a>
    </div>
  )
}
