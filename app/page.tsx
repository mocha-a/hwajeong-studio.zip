import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <main>
        <Image className={styles.corner_TL} src="/images/bg/corner_TL.png" alt="corner_TL" width={300} height={302} />
        <Image className={styles.corner_BL} src="/images/bg/corner_BL.png" alt="corner_BL" width={300} height={376} />
        <Image className={styles.corner_TR} src="/images/bg/corner_TR.png" alt="corner_TR" width={300} height={255} />
        <Image className={styles.corner_BR} src="/images/bg/corner_BR.png" alt="corner_BR" width={300} height={272} />

        <div className={styles.star_bg}>
          <Image src="/images/bg/star_Orbit.png" alt="Orbit" width={500} height={333} />
        </div>

        <div className={styles.hero}>
          <h1 className={styles.title}>Marketing Design</h1>
          <h2 className={styles.subtitle}>PORTFOLIO</h2>
          <Image className={styles.logo} src="/images/hwajeong_logo.png" alt="logo" width={240} height={55} />
        </div>
      </main>
    </div>
  );
}
