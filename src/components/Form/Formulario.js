import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {
  addGoal
} from '../../Reducers/goalsSlices';
import { useRef } from 'react';

function Formulario(props) {

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e) =>{
    e.preventDefault();
    dispatch(addGoal({'name':inputRefName.current.value, 'description':inputRefDescription.current.value, 'dueDate':inputRefDueDate.current.value}));
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" ref={inputRefName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <textarea placeholder="Enter Description..." ref={inputRefDescription} textarea/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="Due Date" ref={inputRefDueDate}/>
      </Form.Group>
      <Button variant="info" onClick={addItem} type="submit">
        Create
      </Button>
    </Form>
  );
}

export default Formulario;