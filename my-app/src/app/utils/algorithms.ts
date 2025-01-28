import { User } from "./dummyData";

//①オブジェクトを利用したソート
export const sortObject = (data: User[]): User[] => {
  console.log("obBtn click");

  return [...data].sort((a, b) => a.age - b.age);
};

//②バブルソート
export const sortBubble = (data: User[]): User[] => {
  console.log("bubbleBtn click");
  //元の配列をコピー
  const array = [...data];
  for (let i = 0; i < array.length; i++) {
    // -1で配列の範囲を超えないように
    for (let j = 0; j < array.length - i - 1; j++) {
      //jより、j＋１された値が小さい場合
      if (array[j].age > array[j + 1].age) {
        //要素を交換
        console.log("要素の入れ替え");

        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};
