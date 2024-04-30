import "./App.scss";
import Item from "./components/Item/Item";
import Formulario from "./components/Form/Formulario";
import Menu from "./components/Menu/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddingMobileBtn from "./components/AddingMobileBtn/AddingMobileBtn";
import { useSelector } from "react-redux";

const list = [
  {
    name: "Ganar curso 1",
    description: "Aprobar el curso de ADW de manera satisfactoria",
    dueDAte: "26-05-2024",
  },
  {
    name: "Ganar curso 2",
    description: "Aprobar el curso de ADW de manera satisfactoria",
    dueDAte: "26-05-2024",
  },
  {
    name: "Ganar curso 3",
    description: "Aprobar el curso de ADW de manera satisfactoria",
    dueDAte: "26-05-2024",
  },

];
function App() {
  const goals = useSelector((state)=>state.goals.value)
  return (
    <div className="App">
      <Menu></Menu>
      <Container className="cont">
        <Row className=".d-none">
          <Col className=".d-none .d-sm-block 	.d-sm-none .d-md-block ">
            <Formulario></Formulario>{" "}
          </Col>
          <Col>
            <Row className=".d-md-none">
              <div className="bg-transparent overlapping-div">
                <AddingMobileBtn className="float-left" />
              </div>
            </Row>
            {goals.map((task, index) => (
              <Item key={index}
                name={task.name}
                description={task.description}
                dueDate={task.dueDAte}
              ></Item>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
