import styles from "./page.module.css";

// import UserList from "./components/List";
import { dummyData, User } from "./utils/dummyData";
import { useEffect, useState } from "react";
// import { sortObject, sortBubble } from "./utils/algorithms";

const Home: React.FC = () => {
  const data: User[] = dummyData(100);
  console.log(data);

  return <></>;
};

export default Home;
