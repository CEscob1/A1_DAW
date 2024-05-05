import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {changeOption} from '../../Reducers/optionSlice'

function Menu() {
  const changeOptionFunc = (e)=>{

  }
  return (
    <Nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <Container >
        <Navbar.Brand className='text-info text-uppercase '>Desarrollo de Aplicaciones Web</Navbar.Brand>
        <Navbar.Brand className='text-primary' href="/">Task</Navbar.Brand>
        <Navbar.Brand className='text-primary' href="/">Goal</Navbar.Brand>
      </Container>
    </Nav>
  );
}

export default Menu;