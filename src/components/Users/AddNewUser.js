import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addData } from "../../services/api";
import { initialValue } from "../Forms/InitialValue";
import UserForm from "../Forms/UserForm";

const AddNewUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(initialValue);
  const {
    FirstName,
    LastName,
    Username,
    Password,
    Email,
    Status,
    UserPermissions,
  } = users;

  const onValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const addUserDetails = async (e) => {
    e.preventDefault();
    await addData("users", users);
    navigate("/");
  };
  let props = {
    actionType: addUserDetails,
    onValueChange,
    FirstName,
    LastName,
    Username,
    Password,
    Email,
    Status,
    UserPermissions,
    buttonTitle: "Add",
  };
  return (
    <>
      <div className="create">
        <h1 className="text-center mt-3">Add new user</h1>
        <UserForm {...props} />
      </div>
    </>
  );
};

export default AddNewUser;
