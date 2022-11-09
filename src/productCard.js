import { Card, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function ProductCard(props) {

  const product = props.product;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {editing === false ? (
          <>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="danger">Delete Product</Button>
            <Button variant="secondary" onClick={() => setEditing(true)}>
              Edit Product
            </Button>
          </>
        ) : (
          <>
            <h4>Editing Product</h4>
            <Button size="sm" onClick={() => setEditing(false)}>
              Go Back
            </Button>
            <br></br>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              defaultValue={product.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              defaultValue={product.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <Button>Create Product</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
