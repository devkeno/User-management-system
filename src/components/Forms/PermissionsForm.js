import { useState } from "react";
import { Button } from "react-bootstrap";

const PermissonsForm = ({
  actionType,
  onValueChange,
  FirstName,
  LastName,
  Username,
  Email,
  Status,
  UserPermissions,
  buttonTitle,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e, item) => {
    onValueChange(e, item);
    setChecked(!checked);
  };

  return (
    <>
      <section className="users user-form">
        <div className="card add-user">
          <p>
            <b>First name:</b> {FirstName}
          </p>
          <p>
            <b>Last name: </b>
            {LastName}
          </p>
          <p>
            <b>Username: </b>
            {Username}
          </p>
          <p>
            <b>Email: </b>
            {Email}
          </p>
          <p>
            <b>Status: </b>
            {Status}
          </p>

          <form onSubmit={actionType}>
            <label htmlFor="">
              <b>Choose Permissions: </b>
            </label>

            {UserPermissions &&
              UserPermissions.map((item) => {
                return (
                  <div className="selectPermissions" key={item.id}>
                    <input
                      type="checkbox"
                      name="isChecked"
                      value={checked}
                      defaultChecked={item.isChecked}
                      onChange={(e) => handleChange(e, item)}
                    />
                    <b>{item.name} </b>
                    <span> - {item.description}</span>
                  </div>
                );
              })}

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

export default PermissonsForm;
