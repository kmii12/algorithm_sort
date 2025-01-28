// import styles from "./page.module.css";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {data.map((user) => (
          <li
            key={user.id}
            className="border rounded p-2 flex justify-between items-center"
          >
            <span>
              {user.name} (Age: {user.age})
            </span>
            <span>{user.city}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
