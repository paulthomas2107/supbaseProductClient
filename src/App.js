import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { useState } from 'react';
import ProductCard from './productCard';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Store Products</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by PaulCodes</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs="{12}" md={8}>
            <h3>Create Product For Supabase DB</h3>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <Button>Create Product in Supabase DB</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          <Col>
            <ProductCard></ProductCard>
          </Col>
          <Col>
            <ProductCard></ProductCard>
          </Col>
          <Col>
            <ProductCard></ProductCard>
          </Col>
          <Col>
            <ProductCard></ProductCard>
          </Col>
          <Col>
            <ProductCard></ProductCard>
          </Col>
          <Col>
            <ProductCard></ProductCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
