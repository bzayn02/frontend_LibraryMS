import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { AiFillHome, AiOutlineUserAdd } from 'react-icons/ai';
import { MdDashboard, MdLogin, MdLogout } from 'react-icons/md';

const Header = () => {
  return (
    <Navbar bgexpand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Library Management Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              {' '}
              <span className="d-flex flex-column justify-content-center align-items-center">
                <AiFillHome className="fs-3" /> Home
              </span>
            </Nav.Link>
            <Nav.Link href="#link">
              <span className="d-flex flex-column justify-content-center align-items-center">
                <MdDashboard className="fs-3" />
                Dashboard
              </span>
            </Nav.Link>
            <Nav.Link href="#link">
              {' '}
              <span className="d-flex flex-column justify-content-center align-items-center">
                <MdLogin className="fs-3" />
                Sign In
              </span>
            </Nav.Link>
            <Nav.Link href="#link">
              {' '}
              <span className="d-flex flex-column justify-content-center align-items-center">
                <AiOutlineUserAdd className="fs-3" />
                Sign Up
              </span>
            </Nav.Link>
            <Nav.Link href="#link">
              {' '}
              <span className="d-flex flex-column justify-content-center align-items-center">
                <MdLogout className="fs-3" />
                Log Out
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
