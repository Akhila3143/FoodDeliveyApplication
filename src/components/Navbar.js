import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">🍔QuickEats-FAST AND EASY FOOD DELIVERY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-button" to="/">Home</Link>
            <Link className="nav-button" to="/signup">Signup</Link>
            <Link className="nav-button" to="/login">Login</Link>
            <Link className="nav-button" to="/menu">Menu</Link>
            <Link className="nav-button" to="/cart">Cart</Link>
            <Link className="nav-button" to="/orders">My Orders</Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
