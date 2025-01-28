import styles from "./page.module.css";

import UserList from "./components/List";
import { dummyData, User } from "./utils/dummyData";
import { useEffect, useState } from "react";
// import { sortObject, sortBubble } from "./utils/algorithms";

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]); //元データ

  useEffect(() => {
    //ダミーデータ作成
    const createDummyData = dummyData(100);
    setData(createDummyData);
    console.log(createDummyData);
  }, []);

  return <></>;
};

export default Home;
