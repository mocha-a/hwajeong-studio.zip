import styles from "./Awards.module.scss";
import AboutSection from "../aboutSection/AboutSection";

const Awards = () => {
  return (
  <div className={styles.awards}>
    <AboutSection title="Awards">
      <p>TOM N TOMS 브랜드 리뉴얼 우수 프로젝트 선정</p>
    </AboutSection>
  </div>
  )
}

export default Awards