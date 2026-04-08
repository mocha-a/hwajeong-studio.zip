"use client"
import styles from "./MouseScroll.module.scss";

const MouseScroll = () => {
  return (
    <button className={styles.mouseButton}>
      <div className={styles.mouseBody}>
        <div className={styles.scrollBall}></div>
      </div>
      <p className={styles.label}>scroll</p>
    </button>
  )
}

export default MouseScroll