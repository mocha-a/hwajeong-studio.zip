"use client"
import styles from "./MouseScroll.module.scss";

const MouseScroll = () => {
    const scroll = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.mouseButton} onClick={scroll}>
      <div className={styles.mouseBody}>
        <div className={styles.scrollBall}></div>
      </div>
      <p className={styles.label}>scroll</p>
    </button>
  )
}

export default MouseScroll