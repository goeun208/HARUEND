import React from "react";
import { todayFormat } from "../format/date";
import { weather } from "../format/weather";
import styles from "./Write.module.css";

const Write = () => {

  let date:string = todayFormat();
  let w:string = weather();
  return (
    <div className={styles.wrap}>
        <div className={styles.top}>{date} {w}</div>
        <div className={styles.tmbox}>
          <input type="text" placeholder="Title" className={styles.title}></input> 
          <select className={styles.mood}>
            <option>π</option>
            <option>π₯</option>
          </select>
        </div>
        <div className={styles.mobox}>
          <div className={styles.music}></div>
          <div className={styles.ootd}></div>
        </div>
        <textarea className={styles.textbox} placeholder="μ€λμ μ΄λ€ μΌμ΄ μμλμ?" />
        <input type="text" placeholder="νλ£¨λ₯Ό λ§λ¬΄λ¦¬νλ νλ§λ" className={styles.ment} />
        <button type="button" className={styles.btn}>μλ£</button>
    </div>
  );
}

export default Write;