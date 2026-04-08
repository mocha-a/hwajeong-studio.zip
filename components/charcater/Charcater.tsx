import Image from "next/image";
import styles from "./Charcater.module.scss";

const Charcater = () => {
  return (
  <>
    <Image className={styles.lemon} src="/images/character/lemon.png" alt="lemon" width={300} height={300} unoptimized />
    <Image className={styles.lime} src="/images/character/lime.png" alt="lime" width={330} height={330} unoptimized />
    <Image className={styles.pinky} src="/images/character/pinky.png" alt="pinky" width={260} height={260} unoptimized />
    <Image className={styles.purple} src="/images/character/purple.png" alt="purple" width={260} height={260} unoptimized />
    <Image className={styles.sky} src="/images/character/sky.png" alt="sky" width={330} height={330} unoptimized />
  </>
  )
}

export default Charcater