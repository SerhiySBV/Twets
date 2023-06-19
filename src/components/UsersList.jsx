import { useEffect, useState } from "react";
import UserItem from "./UserItem";

import { getAllUsers } from "../api/users";

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
    <>
      {users.map((user) => (
        <UserItem key={user.id} user={user}  />
      ))}
    </>
  );
};
export default UserList;
