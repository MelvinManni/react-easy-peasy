import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useStoreActions } from "../../store/hooks";

type Props = {
  title: string;
  item: string;
  id: string;
  show: boolean;
  onHide: () => void;
};

export default function EditModal({ title, id, item, show, onHide }: Props) {
  const [updatedItem, setUpdatedItem] = React.useState<string>("");
  const editItem = useStoreActions((actions) => actions.updateItem);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editItem({ id, item: updatedItem });
    setUpdatedItem("");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="item"
              value={updatedItem || item}
              minLength={3}
              required
              onChange={({ target: { value } }) => setUpdatedItem(value)}
              type="text"
              placeholder="Enter new item..."
            />
          </Form.Group>
          <Button className=" w-100" variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
