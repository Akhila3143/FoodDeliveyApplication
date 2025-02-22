import React, { useState, useEffect } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState(JSON.parse(localStorage.getItem("feedbacks")) || {});

  // Load orders from localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // Function to save feedback
  const submitFeedback = (orderId, rating, review) => {
    const updatedFeedbacks = {
      ...feedbacks,
      [orderId]: { rating, review }
    };
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Orders</h2>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <Card className="mb-3" key={index}>
            <Card.Body>
              <Card.Title>{order.name}</Card.Title>
              <Card.Text>₹{order.price}</Card.Text>

              {/* Feedback Form */}
              {!feedbacks[order.id] ? (
                <Form>
                  <Form.Label>Rate this Dish:</Form.Label>
                  <Form.Select id={`rating-${index}`}>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                  </Form.Select>

                  <Form.Control
                    type="text"
                    placeholder="Write a review..."
                    className="mt-2"
                    id={`review-${index}`}
                  />

                  <Button
                    variant="success"
                    className="mt-2"
                    onClick={() => submitFeedback(
                      order.id,
                      document.getElementById(`rating-${index}`).value,
                      document.getElementById(`review-${index}`).value
                    )}
                  >
                    Submit Feedback
                  </Button>
                </Form>
              ) : (
                <div>
                  <p><strong>⭐ {feedbacks[order.id].rating} Stars</strong></p>
                  <p>{feedbacks[order.id].review}</p>
                </div>
              )}
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-center">No orders yet.</p>
      )}
    </Container>
  );
};

export default Orders;
