import styles from "./page.module.css";

// import UserList from "./components/List";
import { dummyData, User } from "./utils/dummyData";
import { useEffect, useState } from "react";
// import { sortObject, sortBubble } from "./utils/algorithms";

const Home: React.FC = ({ listData }) => {
  const data: User[] = dummyData(100);
  console.log(data);

  return (
    <>
      <ul>
        {listData.map((user) => {
          <li key={user.id}></li>;
        })}
      </ul>
    </>
  );
};

export default Home;
