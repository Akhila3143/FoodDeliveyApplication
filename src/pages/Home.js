import React from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Food Image Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Delicious Food, <span>Delivered to You</span>
          </motion.h1>
          <p>Get fresh & tasty meals delivered in 30 minutes.</p>
          <Button className="order-button">Order Now</Button>
        </div>
        <div className="hero-image">
          <img src="/images/delivery-guy.jpg" alt="Delivery Guy" className="delivery-guy" />
        </div>
      </header>

      {/* Search Bar for Location */}
      <section className="location-search">
        <input type="text" placeholder="Enter your delivery location..." />
        <Button className="search-button">Find Restaurants</Button>
      </section>

      {/* Food Image Carousel */}
      <section className="food-gallery">
        <h2>Explore Our Delicious Menu</h2>
        <Slider {...sliderSettings} className="gallery-slider">
          <img src="/images/noodles.jpg" alt="Noodles" />
          <img src="/images/burger.jpeg" alt="Burger" />
          <img src="/images/chicken-biryani.jpg" alt="Biryani" />
          <img src="/images/south-indian.jpeg" alt="South Indian" />
          <img src="/images/pizza.jpeg" alt="Pizza" />
        </Slider>
      </section>

      {/* Special Offers Section */}
      <section className="special-offers">
        <h2>🔥 Today’s Special Deals</h2>
        <div className="offers">
          <div className="offer-card">
            <h3>🍔 Buy 1 Get 1 Free</h3>
            <p>Order a burger and get one free!</p>
          </div>
          <div className="offer-card">
            <h3>🍕 30% Off on Pizzas</h3>
            <p>Get a 30% discount on your first pizza order.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service-card">
          <h3>🚀 Fast Delivery</h3>
          <p>Get your food delivered in 30 minutes or less.</p>
        </div>
        <div className="service-card">
          <h3>🔥 Best Quality</h3>
          <p>We use only fresh and high-quality ingredients.</p>
        </div>
        <div className="service-card">
          <h3>💰 Affordable Prices</h3>
          <p>Enjoy premium meals at pocket-friendly prices.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
