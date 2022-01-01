import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import "./Navbar.scss";

export default function NavbarComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="container-nav" expand="md" light>
        <Container>
          <NavbarBrand href="/" className="nav-brand">
            {props.title}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/standings" className="nav-link">
                  Klasemen
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/store" className="nav-link">
                  Official Store
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
