import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'C:/Users/erick/OneDrive/Escritorio/A1_DESA/my-app/src/components/Item/Item.scss'
function Item(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
       <Card.Text className='fw-bold'> Name
        </Card.Text>
        <Card.Text>
        {props.name}
        </Card.Text>
        <Card.Text className='fw-bold'> Description
        </Card.Text>
        <Card.Text>
        {props.description}  
        </Card.Text>
        <Card.Text className='fw-bold'> Due date
        </Card.Text>
        <Card.Text>
        {props.dueDate}
        </Card.Text>
        <Button variant="info">Edit</Button>
        <Button variant="info">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;