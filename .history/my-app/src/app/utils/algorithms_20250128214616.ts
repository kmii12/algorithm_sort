import { User } from "./dummyData";

//①オブジェクトを利用したソート
export const sortObject = (data: User[]): User[] => {
  console.log(data);
  console.log("ageBtn click");

  return [...data].sort((a, b) => a.age - b.age);
};

//②バブルソート
export const sortBubble = (data: User[]): User[] => {
  //元の配列をコピー
  const array = [...data];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; i++) {
      //jより、j＋１された値が小さい場合
      if (array[j].age > array[j + 1].age) {
        //要素を交換
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};
