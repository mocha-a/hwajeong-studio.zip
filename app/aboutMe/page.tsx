"use client";
import { useRouter } from "next/navigation";
import AboutSection from "../../components/aboutSection/AboutSection";
import styles from "./page.module.scss";
import Image from "next/image";

const Page = () => {
  const router = useRouter();

  return (
    <div className={styles.aboutMe}>
      <div className={styles.contents}>
        <div className={styles.profile}>
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
          {/* Education */}
          <div className={styles.education}>
            <AboutSection title="Education">
              <p className={styles.text}>언양자연과학고등학교 · 제빵제과</p>
            </AboutSection>
          </div>
        </div>

        <div className={styles.records}>
          {/* Training */}
          <div className={styles.training}>
            <AboutSection title="Training">
              <div className={styles.item}>
                <p className={styles.title}>내일 배움 캠프</p>
                <p className={styles.subtitle}>
                  생성형 AI 기반 그래픽 디자이너 양성과정
                </p>
                <p className={styles.date}>2025.11.03 · 2026.03.30</p>
                <ul className={styles.details}>
                  <li>Tools: Photoshop, Illustrator, After Effects, Blender</li>
                  <li>AI Tools: Midjourney, GPT, Gemini</li>
                  <li>AI 기반 디자인 제작 및 실무 기초 교육 이수</li>
                </ul>
              </div>
            </AboutSection>
          </div>

          {/* Certifications */}
          <div className={styles.certifications}>
            <AboutSection title="Certifications">
              <div className={styles.item}>
                <div className={styles.row}>
                  <span>병원 코디네이터</span>
                  <span className={styles.dots}></span>
                  <span className={styles.date}>2026.03</span>
                </div>
                <div className={styles.row}>
                  <span>GTQ 1급 포토샵</span>
                  <span className={styles.dots}></span>
                  <span className={styles.date}>2026.02</span>
                </div>
                <div className={styles.row}>
                  <span>운전면허증 2종</span>
                  <span className={styles.dots}></span>
                  <span className={styles.date}>2020.08</span>
                </div>
              </div>
            </AboutSection>
          </div>
        </div>

        {/* tools */}
        <div className={styles.extra}>
          <AboutSection title="Tools">
            <div className={styles.toolsGrid}>
              <div className={styles.toolItem}>
                <Image src="/images/tools/photoshop.svg" alt="photoshop" width={100} height={100} />
                <div className={styles.overlay}>
                  <span>Photoshop</span>
                </div>
              </div>
              <div className={styles.toolItem}>
                <Image src="/images/tools/llustrator.svg" alt="llustrator" width={100} height={100} />
                <div className={styles.overlay}>
                  <span>llustrator</span>
                </div>
              </div>
              <div className={styles.toolItem}>
                <Image src="/images/tools/midjourney.svg" alt="midjourney" width={100} height={100} />
                <div className={styles.overlay}>
                  <span>Midjourney</span>
                </div>
              </div>
              <div className={styles.toolItem}>
                <Image src="/images/tools/gemini.svg" alt="gemini" width={100} height={100} />
                <div className={styles.overlay}>
                  <span>Gemini</span>
                </div>
              </div>
              <div className={styles.toolItem}>
                <Image src="/images/tools/blender.svg" alt="blender" width={100} height={100} />
                <div className={styles.overlay}>
                  <span>Blender</span>
                </div>
              </div>
              <div className={styles.toolItem}>
                <Image src="/images/tools/after-effects.svg" alt="after-effects" width={100} height={100} />
                <div className={styles.overlay}>
                  <span>After<br/>Effects</span>
                </div>
              </div>
            </div>
          </AboutSection>

          <div className={styles.awards}>
            <AboutSection title="Awards">
              <p>TOM N TOMS 브랜드 리뉴얼 우수 프로젝트 선정</p>
            </AboutSection>
          </div>
        </div>
      </div>

      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}

export default Page