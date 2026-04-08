import Image from "next/image";
import styles from "./page.module.scss";
import MouseScroll from "../components/mouseScroll/MouseScroll";
import Charcater from "../components/charcater/Charcater";

export default function Home() {
  return (
    <div className={styles.home}>
      <main>
        <Charcater />
        
        <div className={styles.star_bg}>
          <Image src="/images/bg/star_Orbit.png" alt="Orbit" width={500} height={333} loading="eager"/>
        </div>

        <div className={styles.hero}>
          <h1 className={styles.title}>Marketing Design</h1>
          <h2 className={styles.subtitle}>PORTFOLIO</h2>
          <Image className={styles.logo} src="/images/hwajeong_logo.png" alt="logo" width={240} height={55} />
        </div>

        <MouseScroll/>
      </main>
    </div>
  );
}