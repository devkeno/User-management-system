import { useState } from "react";
import { Button } from "react-bootstrap";
import { PaginationComponent, Popup } from "../index";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";

const User = ({ users, assignPermissions, deleteUser, editUser }) => {
  const [posts, SetPosts] = useState(users);
  const [postPerPage, SetPostPerPage] = useState(10);
  const [currentPage, SetCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");
  const [sortOrder, setSortOrder] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const [pageItem, SetPageItem] = useState({
    start: 0,
    end: postPerPage,
  });
  const handleSearch = (data) => {
    return data.filter(
      (user) =>
        user.FirstName.includes(searchValue) ||
        user.LastName.includes(searchValue) ||
        user.Email.includes(searchValue) ||
        user.Status.includes(searchValue)
    );
  };
  const handlePopup = (id) => {
    setShowPopup(true);
    setCurrentUserId(id);
  };

  const handleSort = (sortBy) => {
    if (sortOrder === true) {
      posts.sort((a, b) =>
        a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
      );
      setSortOrder(false);
    } else {
      posts.sort((a, b) =>
        a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? 1 : -1
      );
      setSortOrder(true);
    }
  };

  let props = {
    SetPageItem,
    SetPostPerPage,
    SetCurrentPage,
    posts,
    postPerPage,
    currentPage,
    SetPosts,
    users,
  };
  return (
    <>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          deleteUser={deleteUser}
          id={currentUserId}
        />
      )}
      <div className="searchBar">
        <input
          type="text"
          name="search"
          placeholder="Type to search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-text-small mb-0">
                    <thead className="thead-primary table-sorting">
                      <tr>
                        <th onClick={() => handleSort("FirstName")}>
                          First name{" "}
                          {sortOrder ? (
                            <BsSortAlphaDown />
                          ) : (
                            <BsSortAlphaUpAlt />
                          )}{" "}
                        </th>
                        <th onClick={() => handleSort("LastName")}>
                          Last name{" "}
                          {sortOrder ? (
                            <BsSortAlphaDown />
                          ) : (
                            <BsSortAlphaUpAlt />
                          )}
                        </th>
                        <th onClick={() => handleSort("Username")}>
                          Username{" "}
                          {sortOrder ? (
                            <BsSortAlphaDown />
                          ) : (
                            <BsSortAlphaUpAlt />
                          )}
                        </th>
                        <th onClick={() => handleSort("Email")}>
                          Email{" "}
                          {sortOrder ? (
                            <BsSortAlphaDown />
                          ) : (
                            <BsSortAlphaUpAlt />
                          )}
                        </th>
                        <th onClick={() => handleSort("Status")}>
                          Status{" "}
                          {sortOrder ? (
                            <BsSortAlphaDown />
                          ) : (
                            <BsSortAlphaUpAlt />
                          )}
                        </th>
                        <th>Permissions</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts &&
                        handleSearch(posts)
                          .slice(pageItem.start, pageItem.end)
                          .map((data, index) => {
                            return (
                              <tr key={data.id}>
                                <td>{data.FirstName}</td>
                                <td>{data.LastName}</td>
                                <td>{data.Username}</td>
                                <td>{data.Email}</td>
                                <td>{data.Status}</td>
                                <td>
                                  {data.UserPermissions.map((permission) => {
                                    return (
                                      permission.isChecked && (
                                        <span key={permission.id}>
                                          {permission.name},
                                        </span>
                                      )
                                    );
                                  })}
                                </td>
                                <td>
                                  <div className="action-buttons">
                                    <Button
                                      className="btn-sm"
                                      variant="primary"
                                      onClick={() => assignPermissions(data.id)}
                                    >
                                      Assign
                                    </Button>
                                    <Button
                                      className="btn-sm"
                                      variant="secondary"
                                      onClick={() => editUser(data.id)}
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      className="btn-sm"
                                      variant="danger"
                                      onClick={() => handlePopup(data.id)}
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </table>
                </div>
                <PaginationComponent {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
