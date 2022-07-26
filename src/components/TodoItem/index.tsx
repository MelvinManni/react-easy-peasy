import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useStoreActions } from "../../store/hooks";
import EditModal from "../EditModal";

type Props = {
  item: string;
  id: string;
};

export default function TodoItem({ item, id }: Props) {
  const [showEdit, setShowEdit] = React.useState(false);
  const deleteItem = useStoreActions((actions) => actions.removeItem);

  const handleClose = () => setShowEdit(false);

  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <p className="m-0">{item}</p>
        </Card.Body>
        <Card.Footer>
          <Row className="justify-content-between">
            <Col xl="3" md="4" sm="5" xs="12">
              <Button onClick={() => setShowEdit(true)} className="w-100" variant="warning">
                Edit
              </Button>
            </Col>
            <Col className="mt-sm-0 mt-2" xl="3" md="4" sm="5" xs="12">
              <Button onClick={()=> deleteItem(id)} className="w-100" variant="danger">
                delete
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <EditModal show={showEdit} onHide={handleClose} item={item} id={id} title={`Edit: ${id}`} />
    </>
  );
}
