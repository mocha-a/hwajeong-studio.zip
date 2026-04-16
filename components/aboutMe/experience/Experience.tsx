import styles from "./Experience.module.scss";
import AboutSection from "../aboutSection/AboutSection";
import { training } from "../../../data/aboutMe";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <AboutSection title="Experience">
        <div className={styles.educationSection}>
          <h4>[ Education ]</h4>
          <div className={styles.educationContent}>
            <p className={styles.school}>울산자연과학고등학교<span className={styles.major}>식품가공과</span></p>
          </div>
        </div>

        <div className={styles.training}>
          <h4>[ Training ]</h4>
          {training.map((item =>
            <div className={styles.item} key={item.subtitle}>
              <p className={styles.title}>
                ( {item.title} ) {item.subtitle}
              </p>
              <p className={styles.date}>{item.date}</p>
              <ul className={styles.details}>
                {item.details.map((detail, i)=>
                  <li key={i}>{detail}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </AboutSection>
    </div>
  )
}

export default Experience