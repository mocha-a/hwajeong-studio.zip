import MenuButton from "../menuButton/MenuButton";
import styles from "./MainMenu.module.scss";

interface Props {
  onAboutMe: () => void;
  onProjects: () => void;
}

const MainMenu = ({ onAboutMe, onProjects }: Props) => {
  return (
    <div className={styles.mainMenu}>
      <MenuButton btn={"about Me"} onClick={onAboutMe}/>
      <MenuButton btn={"Projects"} onClick={onProjects}/>
    </div>
    
  )
}

export default MainMenu