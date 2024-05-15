import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useDispatch } from "react-redux";
import { removeTask } from "../../Reducers/taskSlice"; 
import { removeGoal } from "../../Reducers/goalsSlices";


function Item({ id, type, name, description, dueDate }) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    if (type === 'GOAL') {
      dispatch(removeGoal(id));
    } else if (type === 'TASK') {
      dispatch(removeTask(id));
    }
  };

  const getTypeBadge = (type) => {
    if (type === 'GOAL') {
      return <Badge bg="success" className="mb-2">Goal</Badge>;
    } else if (type === 'TASK') {
      return <Badge bg="primary" className="mb-2">Task</Badge>;
    }
    return null;
  };

  return (
    <Card style={{ width: "18rem" }} className="mb-2">
      <Card.Body>
        {getTypeBadge(type)}
        <Card.Text className="fw-bold">Name</Card.Text>
        <Card.Text>{name}</Card.Text>
        <Card.Text className="fw-bold">Description</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="fw-bold">Due date</Card.Text>
        <Card.Text>{dueDate}</Card.Text>
        <Button variant="warning mx-3">Edit</Button>
        <Button variant="danger" onClick={handleRemoveClick}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
