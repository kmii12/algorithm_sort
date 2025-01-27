import { User } from "./dummyData";

//①オブジェクトを利用したソート

export const sortObject = (data: User[]): User[] => {
  return [...data].sort((a, b) => a.age - b.age);
};
