import React, { useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/people")
      .then((res) => {
        setLoading(false);
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  console.log(users);

  return (
    <div>
      {users.map((user) => {
        return <link>{user.name}</link>;
      })}
    </div>
  );
};

export { Users };
