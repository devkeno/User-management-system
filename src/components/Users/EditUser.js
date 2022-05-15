import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editData, getAllData } from "../../services/api";
import { v4 as uuidv4 } from "uuid";
import { UserForm } from "../index";

const EditUser = () => {
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
  const { FirstName, LastName, Username, Password, Email, Status } = user;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllData("users", idx);
      setUsers(response.data);
    };

    fetchData();
  }, [idx]);

  const onValueChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
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
    buttonTitle: "Update",
  };
  return (
    <>
      <div className="create">
        <h1 className="text-center mt-3">Edit User {Username}</h1>
        <UserForm {...props} />
      </div>
    </>
  );
};
export default EditUser;
