"use client"
import Image from "next/image";
import styles from "./StatusBar.module.scss";
import { useEffect, useState } from "react";

const StatusBar = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      // 월/일
      const month = now.getMonth() + 1; // 0~11
      const day = now.getDate();

      // 시/분
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");

      setDate(`${month}/${day}`);
      setTime(`${hours}:${minutes}`);
    }, 1000);

    // 언마운트 시 타이머 제거
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.statusBar}>
      <span>{date}</span>
      <span>{time}</span>
      <Image className={styles.battery} src="/battery.svg" alt="battery" width={60} height={26} />
    </div>
  );
}

export default StatusBar