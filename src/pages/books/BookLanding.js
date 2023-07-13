import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { addBorrowAction } from '../borrowHistory/borrowAction';
import { AiFillHtml5 } from 'react-icons/ai';

const BookLanding = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { title, author, year, thumbnail, summary, isAvailable, dueDate } =
    books.find((item) => item._id === _id) || {};

  const handleOnBorrow = () => {
    if (window.confirm('Are you sure you want to borrow the book?')) {
      const obj = {
        bookID: _id,
        bookName: title,
        thumbnail: thumbnail,
        userID: user._id,
        userName: user.fname,
      };
      dispatch(addBorrowAction(obj));
    }
  };
  return (
    <div>
      <Header />
      <section className="book-landing">
        <Container>
          <Row className="my-4">
            <Col md="4">
              <img src={thumbnail} alt="" />
            </Col>
            <Col md="8">
              <h1>{title}</h1>
              <p>
                {author} - {year}
              </p>
              <p>5 star</p>
              <p>{summary}</p>
              {user?._id ? (
                <div className="d-grid">
                  {isAvailable ? (
                    <Button onClick={handleOnBorrow} variant="dark">
                      Borrow Now
                    </Button>
                  ) : (
                    <Button onClick={handleOnBorrow} disabled variant="dark">
                      Available from : {dueDate.slice(0, 10)}
                    </Button>
                  )}
                </div>
              ) : (
                <Link to="/signin">
                  {' '}
                  <div className="d-grid">
                    <Button variant="dark">Login to Borrow</Button>
                  </div>
                </Link>
              )}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h3 className="text-center">Reviews</h3>
              <hr />
              <div className="review-lists d-flex justify-content-center my-4 w-100 gap-4">
                <Row>
                  <Col md="3">
                    <div className="left-name d-flex justify-content-center align-items-center fs-3 bg-secondary-subtle">
                      BN
                    </div>
                  </Col>
                  <Col md="9">
                    <div className="right-description">
                      <h4>Amazing Book</h4>
                      <div>5 star</div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-end">-Bijay Nagarkoti</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default BookLanding;
