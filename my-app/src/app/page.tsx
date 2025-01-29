"use client";
import style from "./page.module.css";
import { sortBubble, sortObject } from "./utils/algorithms";
import { dummyData, User } from "./utils/dummyData";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [startData, setStartData] = useState<User[]>([]);
  const [timeO, setTimeO] = useState<number | null>(null);
  const [timeB, setTimeB] = useState<number | null>(null);

  useEffect(() => {
    // ダミーデータを生成
    const newDummyData = dummyData(100);
    setData(newDummyData); // 状態を更新
    setStartData(newDummyData);
    console.log(newDummyData);
  }, []);

  //リセット
  const reset = () => {
    setData([...startData]);
    console.log("reset");
  };

  //年齢順でソート(Object)
  const ageSort_ob = () => {
    const start = performance.now(); //計測開始
    const sortedAge = sortObject(data);
    setData([...sortedAge]);
    const end = performance.now(); //計測終了
    setTimeO(end - start);
  };

  //年齢順でソート(Bubble)
  const ageSort_bu = () => {
    const start = performance.now(); //計測開始

    const sortedAge = sortBubble(data);
    setData([...sortedAge]);
    const end = performance.now(); //計測終了
    setTimeB(end - start);
  };

  return (
    <div className={style.mainContainer}>
      <header className={style.header}>
        <h1 className={style.title}>User List (data:{data.length}) </h1>
        <div className={style.btnContainer}>
          <button className={style.resetBtn} onClick={reset}>
            RESET
          </button>
          <button className={style.btnAge} onClick={ageSort_ob}>
            年齢順01
          </button>
          <button className={style.btnAge} onClick={ageSort_bu}>
            年齢順02
          </button>
        </div>

        <div className={style.timeContainer}>
          {/* <p>Object計測時間：{(timeO ? timeO / 1000 : 0).toFixed(2)}ms</p>
          <p>Bubble計測時間：{(timeB ? timeB / 1000 : 0).toFixed(2)}ms</p> */}

          <p>01 - 計測時間：{(timeO ? timeO : 0).toFixed(2)}ms</p>
          <p>02 - 計測時間：{(timeB ? timeB : 0).toFixed(2)}ms</p>
        </div>
      </header>

      <ul className={style.listContainer}>
        {data.map((user) => (
          <li key={user.id} className={style.listItem}>
            <p>
              {user.name}({user.age})
            </p>

            <p className={style.cityTxt}>City : {user.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
