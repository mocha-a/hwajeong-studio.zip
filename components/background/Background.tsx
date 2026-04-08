import styles from "./Background.module.scss";
import CornerSticker from "../cornerSticker/CornerSticker";
import StatusBar from "../statusBar/StatusBar";

const Background = () => {
  return (
    <>
      <div className={styles.background} />
      <CornerSticker />
      <StatusBar />
    </>
  );
};

export default Background;