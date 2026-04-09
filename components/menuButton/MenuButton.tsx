import styles from "./MenuButton.module.scss";

interface Props{
  btn: string;
}

const MenuButton = ({ btn }: Props) => {
  return (
    <div className={styles.btnBox}>
      <p className={styles.btn}>{btn}</p>
    </div>
  )
}

export default MenuButton