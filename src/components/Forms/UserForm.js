import { Button } from "react-bootstrap";

const UserForm = ({
  actionType,
  onValueChange,
  FirstName,
  LastName,
  Username,
  Password,
  Email,
  Status,
  buttonTitle,
}) => {
  const statusActive = [
    { status: "Active", id: 1 },
    { status: "Inactive", id: 2 },
  ];

  return (
    <>
      <section className="users user-form">
        <div className="card add-user">
          <form onSubmit={actionType}>
            <label htmlFor="">First name</label>
            <input
              type="text"
              onChange={(e) => onValueChange(e)}
              name="FirstName"
              value={FirstName}
              required
            ></input>
            <label htmlFor="">Last name</label>
            <input
              type="text"
              onChange={(e) => onValueChange(e)}
              name="LastName"
              value={LastName}
              required
            ></input>
            <label htmlFor="">Username</label>
            <input
              type="text"
              onChange={(e) => onValueChange(e)}
              name="Username"
              value={Username}
              required
            ></input>
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={(e) => onValueChange(e)}
              name="Password"
              value={Password}
              required
            ></input>
            <label htmlFor="">Email</label>
            <input
              type="email"
              onChange={(e) => onValueChange(e)}
              name="Email"
              value={Email}
              required
            ></input>
            <label htmlFor="">Status</label>
            <select
              value={Status}
              name="Status"
              onChange={(e) => onValueChange(e)}
              required
            >
              {statusActive.map((status) => {
                return (
                  <option key={status.id} value={status.status}>
                    {status.status}
                  </option>
                );
              })}
            </select>
            <div className="action-button">
              <Button variant="success" type="submit">
                {buttonTitle}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserForm;
