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
            <option>😄</option>
            <option>😥</option>
          </select>
        </div>
        <div className={styles.mobox}>
          <div className={styles.music}></div>
          <div className={styles.ootd}></div>
        </div>
        <textarea className={styles.textbox} placeholder="오늘은 어떤 일이 있었나요?" />
        <input type="text" placeholder="하루를 마무리하는 한마디" className={styles.ment} />
        <button type="button" className={styles.btn}>완료</button>
    </div>
  );
}

export default Write;