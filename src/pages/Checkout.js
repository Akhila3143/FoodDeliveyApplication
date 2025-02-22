import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Checkout = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center">Checkout</h2>
      <Form className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">Place Order</Button>
      </Form>
    </Container>
  );
};

export default Checkout;
