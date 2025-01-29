import { User } from "./dummyData";

//①JSメソッドを利用したソート
export const sortObject = (data: User[]): User[] => {
  return [...data].sort((a, b) => a.age - b.age);
};

//②バブルソート
export const sortBubble = (data: User[]): User[] => {
  //元の配列をコピー
  const array = [...data];
  for (let i = 0; i < array.length; i++) {
    // -1で配列の範囲を超えないように
    for (let j = 0; j < array.length - i - 1; j++) {
      //jが、j＋１された値より大きい場合
      if (array[j].age > array[j + 1].age) {
        //要素を交換
        console.log("要素の入れ替え");
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};
