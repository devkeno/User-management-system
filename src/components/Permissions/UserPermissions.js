import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editData, getAllData } from "../../services/api";
import { v4 as uuidv4 } from "uuid";
import { PermissonsForm } from '../index';
const UserPermissions = () => {
  const { id: idx } = useParams();
  const navigate = useNavigate();

  const initialValue = {
    id: uuidv4(),
    FirstName: "",
    LastName: "",
    Username: "",
    Password: "",
    Email: "",
    Status: "Active",
  };
  const [user, setUsers] = useState(initialValue);
  const {
    FirstName,
    LastName,
    Username,
    Password,
    Email,
    Status,
    UserPermissions,
  } = user;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllData("users", idx);
      setUsers(response.data);
    };

    fetchData();
  }, [idx]);

  const onValueChange = (e, item) => {
    const userIndex = user.UserPermissions.findIndex(
      (obj) => obj.id === item.id
    );
    user.UserPermissions[userIndex].isChecked =
      !user.UserPermissions[userIndex].isChecked;
    setUsers(user);
  };

  const editUserDetails = async (e) => {
    e.preventDefault();
    await editData("users", idx, user);
    navigate("/");
  };

  let props = {
    actionType: editUserDetails,
    onValueChange,
    FirstName,
    LastName,
    Username,
    Password,
    Email,
    Status,
    UserPermissions,
    buttonTitle: "Assign",
  };
  return (
    <>
      <div className="create">
        <h1 className="text-center mt-3">Edit User {user.FirstName}</h1>
        <PermissonsForm {...props} />
      </div>
    </>
  );
};

export default UserPermissions;
