import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { AiFillHome, AiOutlineUserAdd } from 'react-icons/ai';
import { MdDashboard, MdLogin, MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { persistor } from '../../store';
import { setUser } from '../../pages/signup-signin/userSlice';

const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSignout = () => {
    // remote from persist

    persistor.purge().then(() => {
      console.log('Signed Out.');
    });
    // remove user from redux

    dispatch(setUser({}));
    navigate('/');
  };
  return (
    <Navbar bgexpand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">Library Management Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/">
                  {' '}
                  <span className="d-flex flex-column justify-content-center align-items-center">
                    <AiFillHome className="fs-3" /> Home
                  </span>
                </Link>
                <Link className="nav-link" to="/dashboard">
                  <span className="d-flex flex-column justify-content-center align-items-center">
                    <MdDashboard className="fs-3" />
                    Dashboard
                  </span>
                </Link>
                <Link className="nav-link" onClick={handleOnSignout}>
                  {' '}
                  <span className="d-flex flex-column justify-content-center align-items-center">
                    <MdLogout className="fs-3" />
                    Log Out
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  {' '}
                  <span className="d-flex flex-column justify-content-center align-items-center">
                    <MdLogin className="fs-3" />
                    Sign In
                  </span>
                </Link>
                <Link className="nav-link" to="/new-admin">
                  {' '}
                  <span className="d-flex flex-column justify-content-center align-items-center">
                    <AiOutlineUserAdd className="fs-3" />
                    Sign Up
                  </span>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
