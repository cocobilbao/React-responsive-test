import React, { Component } from "react";
import { Navbar, Nav, NavItem, Button, Image } from "react-bootstrap";
import logo from "./images/logo.svg";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Features
            </NavItem>
            <NavItem eventKey={3} href="#">
              Videos
            </NavItem>
            <NavItem eventKey={4} href="#">
              Pricing
            </NavItem>
            <NavItem eventKey={5} href="#">
              Review
            </NavItem>
            <NavItem eventKey={6} href="#">
              Download
            </NavItem>
            <NavItem eventKey={7} href="#">
              Blog
            </NavItem>
            <Button>Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
