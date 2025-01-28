import React from "react";
import { User } from "../utils/dummyData";

interface UserListProps {
  data: User[];
}

const UserList: React.FC<UserListProps> = ({ data }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
