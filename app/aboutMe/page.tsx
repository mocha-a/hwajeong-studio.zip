"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import Tools from "../../components/aboutMe/tools/Tools";
import Awards from "../../components/aboutMe/awards/Awards";
import Experience from "../../components/aboutMe/experience/Experience";
import ProfileCard from "../../components/aboutMe/profileCard/ProfileCard";
import Certifications from "../../components/aboutMe/certifications/Certifications";

const Page = () => {
  const router = useRouter();

  return (
    <div className={styles.aboutMe}>
      <div className={styles.contents}>
        <div className={styles.profile}>
          <ProfileCard />
        </div>

        <div className={styles.records}>
          <Experience />
          <Certifications />
        </div>

        <div className={styles.extra}>
          <Tools />
          <Awards />
        </div>
      </div>

      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}

export default Page