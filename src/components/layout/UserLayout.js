import React from 'react';
import Header from './Header';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserLayout = ({ children, title }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div className="d-flex">
      <div className="left-menu bg-dark text-light w-20">
        <div className="text-center mt-3 fs-4 p-2">
          {user?.role?.toUpperCase()}
        </div>
        <hr />
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link fs-5 ">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/borrow-history" className="nav-link fs-5 ">
              Borrow History
            </Link>
          </li>
          {user?.role === 'admin' && (
            <>
              <li>
                <Link to="/books" className="nav-link fs-5 ">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/students" className="nav-link fs-5 ">
                  Students
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/signup" className="nav-link fs-5 ">
                  Sign Up
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to="/profile" className="nav-link fs-5 ">
              Profile
            </Link>
          </li>
        </ul>
      </div>

      <div className="right-menu">
        <Header />
        <Container className="page">
          <h1 className="mt-2">{title}</h1>
          <hr />
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
