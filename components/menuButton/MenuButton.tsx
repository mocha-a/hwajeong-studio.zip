import styles from "./MenuButton.module.scss";

interface Props{
  btn: string;
  onClick?: () => void;
}

const MenuButton = ({ btn, onClick }: Props) => {
  return (
    <div className={styles.btnBox} onClick={onClick}>
      <p className={styles.btn}>{btn}</p>
    </div>
  )
}

export default MenuButton