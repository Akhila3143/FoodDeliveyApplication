import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart items from localStorage when the page loads
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to update quantity
  const updateQuantity = (index, quantity) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Function to Remove Item from Cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      <Row>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <Col md={6} key={index}>
              <Card className="mb-4">
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img src={`/images/${item.image}`} alt={item.name} />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>₹{item.price}</Card.Text>
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                      />
                      {/* 🔹 Add Remove Button */}
                      <Button variant="danger" className="mt-2" onClick={() => removeFromCart(index)}>
                        ❌ Remove
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </Row>
      <h4 className="text-end">Total: ₹{totalPrice}</h4>
      <div className="text-center mt-3">
        <Button variant="success" as={Link} to="/checkout">
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
