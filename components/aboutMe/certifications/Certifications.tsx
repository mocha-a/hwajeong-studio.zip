import styles from "./Certifications.module.scss";
import AboutSection from "../aboutSection/AboutSection";
import { certifications } from "../../../data/aboutMe";

const Certifications = () => {
  return (
    <div className={styles.certifications}>
      <AboutSection title="Certifications">
        <ul>
          {certifications.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.dots} />
              <span className={styles.date}>{item.date}</span>
            </li>
          ))}
        </ul>
      </AboutSection>
    </div>
  )
}

export default Certifications