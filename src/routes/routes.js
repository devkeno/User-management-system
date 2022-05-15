import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, AddNewUser, EditUser, UserPermissions } from "../components";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/permissions/:id" element={<UserPermissions />} exact />
          <Route path="/addNewUser" element={<AddNewUser />} exact />
          <Route path="/editUser/:id" element={<EditUser />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
