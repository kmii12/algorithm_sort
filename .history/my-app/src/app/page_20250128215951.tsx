"use client";
import style from "./page.module.css";
import { sortBubble, sortObject } from "./utils/algorithms";

// import UserList from "./components/List";
import { dummyData, User } from "./utils/dummyData";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    // ダミーデータを生成
    const newDummyData = dummyData(100); // 例: 100件生成
    setData(newDummyData); // 状態を更新
    console.log(newDummyData);
  }, []);

  //年齢順でソート(Object)
  const ageSort_ob = () => {
    const sortedAge = sortObject(data);
    setData([...sortedAge]);
    console.log(sortedAge);
  };

  //年齢順でソート(Bubble)
  const ageSort_bu = () => {
    const sortedAge = sortBubble(data);
    setData([...sortedAge]);
  };

  return (
    <div className={style.mainContainer}>
      <h1 className={style.title}>User List (data:{data.length}) </h1>
      <div className={style.btnContainer}>
        <button className={style.resetBtn}>RESET</button>
        <button className={style.btnAge} onClick={ageSort_ob}>
          年齢順(Object)
        </button>
        <button className={style.btnAge} onClick={ageSort_bu}>
          年齢順(Bubble)
        </button>
      </div>

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
