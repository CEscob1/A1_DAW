import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import {removeItem } from '../../Reducers/deleteSlice';

function Item(props) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeItem(props.id));
  };
  return (
    <Card style={{ width: "18rem" }} className="mb-2" >
      <Card.Body>
        <Card.Text className="fw-bold"> Type</Card.Text>
        <Card.Text>{props.type}</Card.Text>
        <Card.Text className="fw-bold"> Name</Card.Text>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className="fw-bold"> Description</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className="fw-bold"> Due date</Card.Text>
        <Card.Text>{props.dueDate}</Card.Text>
        <Button variant="warning mx-3">Edit</Button>
        <Button variant="danger" onClick={removeItem}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
