import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useDispatch } from "react-redux";
import { removeTask } from "../../Reducers/taskSlice"; 
import { removeGoal } from "../../Reducers/goalsSlices";

function Item(props) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    if (props.type === 'GOAL') {
      dispatch(removeGoal(props.id));
    } else if (props.type === 'TASK') {
      dispatch(removeTask(props.id));
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
    <Card style={{ width: "18rem" }} className="mb-2" >
      <Card.Body>
        <Card.Text className="fw-bold"> Type</Card.Text>
        <Card.Text>{getTypeBadge(props.type)}</Card.Text>
        <Card.Text className="fw-bold"> Name</Card.Text>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className="fw-bold"> Description</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className="fw-bold"> Due date</Card.Text>
        <Card.Text>{props.dueDate}</Card.Text>
        <Button variant="warning mx-3">Edit</Button>
        <Button variant="danger" onClick={handleRemoveClick}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
