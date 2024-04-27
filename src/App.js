import './App.scss';
import Item from './components/Item/Item';
import Formulario from './components/Form/Formulario';
import Menu from './components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileBtn from './components/AddingMobileBtn/AddingMobileBtn';

function App() {
  return (
    <div className="App">
    <Menu></Menu>
    <Container>
    <Row className='.d-none'>
      <Col className='.d-none .d-sm-block 	.d-sm-none .d-md-block '><Formulario></Formulario> </Col>
      <Col>
      <Row className='.d-md-none'>
      <div className='bg-transparent overlapping-div'>
        <AddingMobileBtn className='float-left'/>
      </div>
      </Row>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      </Col>
    </Row>  
    </Container>
    </div>
  );
}

export default App;
