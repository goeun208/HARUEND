import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerbox}>
      <div className={styles.box}>
        <div style={{color: "#4A9348"}}>HARUEND</div>
        <div style={{ color: "#333", fontWeight: "600", fontSize: "28px"}}>모든 날을 특별하게 기록하다</div>
        <div>오늘 하루는 어땠나요?</div>
        <div>솔직한 나의 감정을 HARUEND에 간편하게 기록해보세요.</div>
      </div>
      <img className={styles.image} src={require("../../assets/images/group-diary 2.png")} alt="note"/>
    </div>
  );
}

export default Banner;