import Image from "next/image";
import styles from "./Tools.module.scss";
import AboutSection from "../aboutSection/AboutSection";
import { tools } from "../../../data/aboutMe";

const Tools = () => {
  return (
    <AboutSection title="Tools">
      <div className={styles.toolsGrid}>
      {tools.map((item, i)=>
        <div className={styles.toolItem} key={i}>
          <Image src={item.src} alt={item.name} width={100} height={100} />
          <div className={styles.overlay}>
            <span>{item.name}</span>
          </div>
        </div>
      )}
      </div>
    </AboutSection>
  )
}

export default Tools