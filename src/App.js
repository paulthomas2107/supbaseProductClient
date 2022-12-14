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
import { useState, useEffect } from 'react';
import ProductCard from './productCard';
import { supabase } from './supabaseClient';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(100);
      if (error) throw error;
      if (data !== null) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createProduct() {
    try {
      const { error } = await supabase
        .from('products')
        .insert({
          name: name,
          description: description,
        })
        .single();
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

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
            <Button onClick={() => createProduct()}>Create Product</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          {products.map((product) => (
            <Col>
              <ProductCard product={product}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
