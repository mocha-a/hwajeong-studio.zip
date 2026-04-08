import Image from "next/image";
import styles from "./CornerSticker.module.scss";

const CornerSticker = () => {
  return (
     <>
      <Image className={styles.corner_TL} src="/images/bg/corner_TL.png" alt="corner_TL" width={300} height={302} />
      <Image className={styles.corner_BL} src="/images/bg/corner_BL.png" alt="corner_BL" width={300} height={376} />
      <Image className={styles.corner_TR} src="/images/bg/corner_TR.png" alt="corner_TR" width={300} height={255} />
      <Image className={styles.corner_BR} src="/images/bg/corner_BR.png" alt="corner_BR" width={300} height={272} />
    </>
  )
}

export default CornerSticker