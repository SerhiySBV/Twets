import { useEffect, useState } from "react";
import UserItem from "./UserItem";

import { getAllUsers } from "../api/users";
import { UserListStyle } from "./UserList.styled";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
     getAllUsers()
       .then((response) => {
         setUsers(response);
       })
       .catch((error) => {
         console.log(error);
       });
  }, []);
  
  
  return (
    <UserListStyle>
      {users.map((user) => (
        <UserItem key={user.id} user={user}  />
      ))}
    </UserListStyle>
  );
};
export default UserList;
