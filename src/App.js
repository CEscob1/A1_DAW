import "./App.scss";
import Item from "./components/Item/Item";
import Formulario from "./components/Form/Formulario";
import Menu from "./components/Menu/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

function App() {
  const typeG = useSelector(state => state.goals.value[0].type);
  const typeT = useSelector(state => state.tasks.value[0].type);
  const goals = useSelector((state)=>state.goals.value)
  const tasks = useSelector((state)=>state.tasks.value)
  return (
<div className="App">
  <Menu></Menu>
  <Container fluid>
    <Row>
      <Col xs={12} lg={8} className="order-2 order-lg-1">
        <div className="d-flex justify-content-center">
          <div className="scrolling">
            {goals.map((task, index) => (
              <Item
                key={index}
                type={typeG}
                name={task.name}
                description={task.description}
                dueDate={task.dueDate}
              ></Item>
            ))}
            {tasks.map((task, index) => (
              <Item
                key={index}
                type={typeT}
                name={task.name}
                description={task.description}
                dueDate={task.dueDate}
              ></Item>
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
