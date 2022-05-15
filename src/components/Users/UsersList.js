import { getAllData, deleteData } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";

const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getAllData("users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await deleteData("users", id);
    getUsers();
  };
  const assignPermissions = (id) => {
    navigate(`../permissions/${id}`);
  };

  const editUser = (id) => {
    navigate(`../editUser/${id}`);
  };
  let props = {
    assignPermissions,
    editUser,
    deleteUser,
    users,
  };

  return (
    <div className="user-list">
      <div className="card">
        <h1 className="text-center py-3">Users list</h1>
        <User {...props} />
      </div>
    </div>
  );
};

export default UsersList;
