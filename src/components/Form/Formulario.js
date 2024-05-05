import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addGoal } from "../../Reducers/goalsSlices";
import { addTask } from "../../Reducers/taskSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function Formulario(props) {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_GOAL_AND_TASK', 
      payload: {
        goal: {
          name: inputRefName.current.value,
          description: inputRefDescription.current.value,
          dueDate: inputRefDueDate.current.value
        },
        task: {
          name: inputRefName.current.value,
          description: inputRefDescription.current.value,
          dueDate: inputRefDueDate.current.value
        }
      }
    });
  };
    
  return (
    <Form>
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" ref={inputRefName} />
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter Description..."
        ref={inputRefDescription}
        textarea
      />
      <Form.Label>Due Date</Form.Label>
      <Form.Control type="date" placeholder="Due Date" ref={inputRefDueDate} />
      <div style={{ marginTop: '20px' }}>
      <Button variant="primary" className="mb-3" onClick={(e) => addItem(e, addGoal)} type="submit">
        Add Goal
      </Button>
      <Button variant="primary" onClick={(e) => addItem(e, addTask)} type="submit" className="mx-3 mb-3">
        Add Task
      </Button>
      </div>
    </Form>
  );
}

export default Formulario;
