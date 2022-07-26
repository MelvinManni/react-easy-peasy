import React from "react";
import { Button, Form } from "react-bootstrap";
import { useStoreActions } from "../../store/hooks";

export default function AddItem() {
  const [item, setItem] = React.useState<string>("");
  const addNewItem = useStoreActions((actions) => actions.setItem);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewItem(item);
    setItem("");

  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          name="item"
          value={item}
          onChange={({ target: { value } }) => setItem(value)}
          minLength={3}
          required
          type="text"
          placeholder="Enter new item..."
        />
      </Form.Group>
      <Button className=" w-100" variant="primary" type="submit">
        Add +
      </Button>
    </Form>
  );
}
