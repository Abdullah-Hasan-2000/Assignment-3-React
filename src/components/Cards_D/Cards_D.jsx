import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards_D({ imgSrc, title, price }) {
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={imgSrc} width='100px' height='200px'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards_D;