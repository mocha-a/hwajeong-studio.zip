"use client";
import { useRouter } from "next/navigation";
import AboutSection from "../../components/aboutSection/AboutSection";
import styles from "./page.module.scss";
import Image from "next/image";

const Page = () => {
  const router = useRouter();

  return (
    <div className={styles.aboutMe}>
      <AboutSection title="ID card">
        <Image
          className={styles.profile}
          src="/images/profile.png" 
          alt="profile" 
          width={350}
          height={450}
        />
        <div className={styles.info}>
          <h2>이화정</h2>
          <p>1993. 06. 14</p>
          <p>010-4444-4340</p>
          <p>h_j_4340@naver.com</p>
        </div>
      </AboutSection>

      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}

export default Page