import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import './Header.css';

function Header({ currentUser }) {
  const loggedin = `Logged in as ${currentUser.username}`;

  //console.log(currentUser)
  return (
    <Navbar
      className="sticky-top nav-bar"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="title">Cocktail App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div>
            <Nav className="nav-container">
              <LinkContainer to="/my-cocktail-list">
                <Nav.Link className="nav-links"> My Cocktails</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav-links" to="/cocktail-list">
                <Nav.Link>Cocktails</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/my-liquor-cabinet">
                <Nav.Link className="nav-links">My Liquor Cabinet</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/new-cocktail">
                <Nav.Link className="nav-links">New Cocktail</Nav.Link>
              </LinkContainer>
              {/* if the current user is not log in display the log in button otherwise display the logout */}
              {!currentUser.username ? (
                <LinkContainer to="/login">
                  <Nav.Link className="nav-links">Login</Nav.Link>
                </LinkContainer>
              ) : (
                <NavDropdown title={loggedin} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
