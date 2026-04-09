import MenuButton from "../menuButton/MenuButton";
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <MenuButton btn={"about Me"} />
      <MenuButton btn={"Projects"} />
    </div>
    
  )
}

export default MainMenu