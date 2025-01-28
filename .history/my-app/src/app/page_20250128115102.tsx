import styles from "./page.module.css";

import { dummyData, User } from "./utils/dummyData";
// import { sortObject, sortBubble } from "./utils/algorithms";

const Home: React.FC = () => {
  //ダミーデータ作成
  const data: User[] = dummyData(10000);

  console.log(data);

  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default Home;
