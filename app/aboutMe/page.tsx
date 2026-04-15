"use client";
import { useRouter } from "next/navigation";
import AboutSection from "../../components/aboutSection/AboutSection";
import styles from "./page.module.scss";
import Image from "next/image";

const Page = () => {
  const router = useRouter();

  return (
    <div className={styles.aboutMe}>
      <div className={styles.idcard}>
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
      </div>

    <div className={styles.education}>
      <AboutSection title="education & certs">
        <div className={styles.info}>
          {/* 학력 */}
          <section>
            <h3>학력사항</h3>
            <div className={styles.item}>
              <p>언양자연과학고등학교 · 제빵제과</p>
            </div>
          </section>
          {/* 교육 */}
          <section>
            <h3>교육</h3>
            <div className={styles.item}>
              <p><strong>내일배움캠프</strong></p>
              <p>생성형 ai 기반 그래픽 디자이너 양성과정</p>
              <p className={styles.date}>2025.11.03 · 2026.03.30</p>
              <ul className={styles.details}>
                <li>photoshop, illustrator, after effects, blender 등 활용</li>
                <li>midjourney, gpt, gemini 등 ai 툴 활용 능력 습득</li>
                <li>ai 기반 디자인 제작 및 디자이너 실무 기초 교육 이수</li>
              </ul>
            </div>
          </section>
          {/* 자격증 */}
          <section>
            <h3>자격증</h3>
            <div className={styles.grid}>
              <p>병원 코디네이터 <span>2026.03</span></p>
              <p>gtq 1급 포토샵 <span>2026.02</span></p>
              <p>운전면허증 2종 <span>2020.08</span></p>
            </div>
          </section>
        </div>
      </AboutSection>
    </div>

      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}

export default Page