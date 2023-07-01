import React from 'react';
import Header from './Header';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const UserLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <div className="left-menu bg-dark text-light w-20">
        <div className="text-center mt-3 fs-4 p-2">Admin</div>
        <hr />
        <ul type="none">
          <li className="d-flex align-items-center justify-content-center">
            <Link to="/dashboard" className="nav-link fs-5 ">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div className="right-menu">
        <Header />
        <Container className="page">{children}</Container>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
