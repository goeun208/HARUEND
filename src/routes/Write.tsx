import React from "react";
import { todayFormat } from "../format/date";
import { weather } from "../format/weather";

const Write = () => {

  let date:string = todayFormat();
  let w:string = weather();
  return (
    <div>
      <div>{date} {w}</div>
      <div>Title & Mood</div>
      <div>
        <div>music</div>
        <div>Today's item</div>
      </div>
      <textarea />
      <div>하루를 마무리하는 한마디</div>
      <button type="button">완료</button>
    </div>
  );
}

export default Write;