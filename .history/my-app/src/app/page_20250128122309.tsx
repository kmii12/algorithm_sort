"use client";
import style from "./page.module.css";

// import UserList from "./components/List";
import { dummyData, User } from "./utils/dummyData";
import { useEffect, useState } from "react";
// import { sortObject, sortBubble } from "./utils/algorithms";

// const Home: React.FC = ({ listData }) => {
//   const data: User[] = dummyData(100);
//   console.log(data);

//   return (
//     <>
//       <ul>
//         {listData.map((user) => {
//           <li key={user.id}></li>;
//         })}
//       </ul>
//     </>
//   );
// };

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    // ダミーデータを生成
    const newDummyData = dummyData(100); // 例: 100件生成
    setData(newDummyData); // 状態を更新
  }, []);

  return (
    <div className={style.mainContainer}>
      <h1 className={style.title}>User List {data.length}人 </h1>
      <ul className={style.listContainer}>
        {data.map((user) => (
          <li key={user.id} className={style.listItem}>
            <p>{user.name}</p>
            <p>({user.age})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
