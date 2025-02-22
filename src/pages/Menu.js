import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Menu.css";

const menuSections = [
  {
    title: "Tiffins",
    items: [
      { name: "Idli", image: "idli.jpeg", price: 30 },
      { name: "Dosa", image: "dosa.jpg", price: 50 },
      { name: "Vada", image: "vada.jpg", price: 40 },
      { name: "Uttapam", image: "uttapam.jpg", price: 60 },
      { name: "Pesarattu", image: "pesarattu.jpg", price: 55 },
      { name: "Poori", image: "poori.jpg", price: 45 },
      { name: "Upma", image: "upma.jpeg", price: 35 },
      { name: "Pongal", image: "pongal.jpg", price: 50 },
    ],
  },
  {
    title: "Vegetarian",
    items: [
      { name: "Paneer Butter Masala", image: "paneer.jpeg", price: 150 },
      { name: "Chole Bhature", image: "chole.jpg", price: 120 },
      { name: "Dal Makhani", image: "dalmakhni.jpg", price: 130 },
      { name: "Aloo Paratha", image: "aloo-paratha.jpg", price: 90 },
      { name: "Kadai Paneer", image: "kadaipaneer.jpeg", price: 140 },
      { name: "Mix Veg Curry", image: "mixveg.jpg", price: 110 },
      { name: "Palak Paneer", image: "palak.jpg", price: 130 },
      { name: "Baingan Bharta", image: "baingan-bharta.jpg", price: 100 },
    ],
  },
  {
    title: "Non-Vegetarian",
    items: [
      { name: "Chicken Biryani", image: "chicken-biryani.jpg", price: 180 },
      { name: "Mutton Curry", image: "mutton.jpg", price: 200 },
      { name: "Tandoori Chicken", image: "tandoori.jpg", price: 190 },
      { name: "Fish Fry", image: "fish.jpg", price: 170 },
      { name: "Egg Curry", image: "egg.jpg", price: 110 },
      { name: "Butter Chicken", image: "butter-chicken.jpg", price: 180 },
      { name: "Prawn Masala", image: "prawn.jpg", price: 220 },
      { name: "Kebab Platter", image: "kebab.jpg", price: 250 },
    ],
  },
  {
    title: "Cakes",
    items: [
      { name: "Chocolate Cake", image: "chocolate-cake.jpg", price: 400 },
      { name: "Black Forest", image: "black-forest.jpeg", price: 450 },
      { name: "Red Velvet", image: "red-velvet.jpg", price: 500 },
      { name: "Butterscotch", image: "butterscotch.jpg", price: 420 },
      { name: "Pineapple Cake", image: "pineapple-cake.jpeg", price: 380 },
      { name: "Strawberry Cake", image: "strawberry-cake.jpg", price: 460 },
      { name: "Blueberry Cheesecake", image: "blueberry.jpeg", price: 550 },
      { name: "Truffle Cake", image: "truffle-cake.jpg", price: 480 },
    ],
  },
  {
    title: "Fast Food",
    items: [
      { name: "French Fries", image: "french-fries.jpeg", price: 80 },
      { name: "Veg Burger", image: "veg-burger.jpg", price: 100 },
      { name: "Chicken Wrap", image: "chicken-wrap.jpg", price: 120 },
      { name: "Hot Dog", image: "hot-dog.jpg", price: 110 },
      { name: "Pasta", image: "pasta.jpeg", price: 130 },
      { name: "Momos", image: "momos.jpeg", price: 90 },
      { name: "Spring Rolls", image: "spring-rolls.jpeg", price: 100 },
      { name: "Tacos", image: "tacos.jpeg", price: 140 },
    ],
  },
];

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [feedbacks] = useState(JSON.parse(localStorage.getItem("feedbacks")) || {});
  const navigate = useNavigate(); // Initialize useNavigate

  // ✅ Calculate Average Rating
  const getAverageRating = (dishName) => {
    const reviews = Object.values(feedbacks).filter((fb) => fb.dish === dishName);
    if (reviews.length === 0) return "No ratings yet";

    const avg = reviews.reduce((acc, fb) => acc + parseInt(fb.rating), 0) / reviews.length;
    return `⭐ ${avg.toFixed(1)}`;
  };

  // ✅ Add item to cart and redirect
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...item, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  // ✅ Filter menu items based on search input
  const filteredMenu = menuSections.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <Container className="menu-container">
      <h1 className="menu-title">Our Delicious Menu</h1>

      {/* ✅ Search Bar */}
      <Form.Control
        type="text"
        placeholder="Search for food..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* ✅ Display Menu */}
      {filteredMenu.map((section, index) => (
        <div key={index} className="menu-section" data-section={section.title}>
          {section.items.length > 0 && (
            <>
              <h2 className="section-title">{section.title}</h2>
              <Row>
                {section.items.map((item, idx) => (
                  <Col key={idx} md={3} sm={6} className="menu-item">
                    <Card className="food-card">
                      <Card.Img
                        variant="top"
                        src={`/images/${item.image}`}
                        alt={item.name}
                        className="food-image"
                      />
                      <Card.Body className="card-body">
                        <Card.Title>{item.name}</Card.Title>

                        {/* ✅ Display Average Rating */}
                        <p className="rating-text">{getAverageRating(item.name)}</p>

                        <Card.Text className="food-price">₹{item.price}</Card.Text>
                        <Button
                          variant="success"
                          className="add-to-cart-btn"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Menu;
