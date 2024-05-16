import "./App.scss";
import Item from "./components/Item/Item";
import Formulario from "./components/Form/Formulario";
import Menu from "./components/Menu/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  initAddTodo,
} from './Reducers/taskSlice'
import {
} from './Reducers/goalsSlices'


function App() {
  const goals = useSelector((state)=>state.goals.value)
  const tasks = useSelector((state)=>state.tasks.value)
  const dispatch = useDispatch();

  function iniFetch (){
    fetch("http://localhost:3001/task/getTasks",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"k3zh^^(s.d;HyURN"
      }
    }).then((Response)=>{
      Response.json()
    }).then((Response)=>{
      Response.map((task)=>{
        dispatch((initAddTodo(task)))
      })
    }).catch((err)=>{
      console.log(err)
    })  
  }
  useEffect(()=>{
    iniFetch();
  })
  return (
<div className="App">
  <Menu></Menu>
  <Container fluid>
    <Row>
      <Col xs={12} lg={8} className="order-2 order-lg-1">
        <div className="d-flex justify-content-center">
          <div className="scrolling">
          {goals.map((goal) => (
                  <Item
                    key={goal.id}
                    id={goal.id} 
                    type={goal.type}
                    name={goal.name}
                    description={goal.description}
                    dueDate={goal.dueDate}
                  />
                ))}
                {tasks.map((task) => (
                  <Item
                    key={task.id}
                    id={task.id} 
                    type={task.type}
                    name={task.name}
                    description={task.description}
                    dueDate={task.dueDate}
                  />
                ))}
          </div>
        </div>
      </Col>
      <Col xs={12} lg={4} className="order-1 order-lg-0">
        <Formulario></Formulario>
      </Col>
    </Row>
  </Container>
</div>
  );
}

export default App;
