import Image from "next/image";
import styles from "./ProfileCard.module.scss";
import AboutSection from "../aboutSection/AboutSection";

const ProfileCard = () => {
  return (
    <div className={styles.idCard}>
      <AboutSection title="ID card">
        <Image
          className={styles.profileImage}
          src="/images/profile.png"
          alt="profile"
          width={350}
          height={450}
        />
        <div className={styles.info}>
          <h2>김땡땡</h2>
          <p>1000. 00. 00</p>
          <p>010-0000-0000</p>
          <p>h_j_4340@naver.com</p>
        </div>
      </AboutSection>
    </div>
  )
}

export default ProfileCard