import { Modal, Button } from "react-bootstrap";

const Popup = ({ setShowPopup, deleteUser, id }) => {
  const handleDelete = () => {
    deleteUser(id);
    setShowPopup(false);
  };
  return (
    <>
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPopup(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
