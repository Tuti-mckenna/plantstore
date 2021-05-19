import React from "react";
//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//Bootstrap Icons
import { CartIcon } from "../CartIcon/CartIcon";
//Logo
import logo from "../../assets/leaf.png";
//css
import "./Header.css";

export const Header = () => {
  return (
    <Navbar variant="tabs">
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logoImg" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/" className="linkNav">
          Plant Store
        </Nav.Link>
        <Nav.Link href="/shop" className="linkNav">
          Tienda
        </Nav.Link>
      </Nav>
      <CartIcon href="/cart" />
    </Navbar>
  );
};
