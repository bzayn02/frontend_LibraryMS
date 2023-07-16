import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { addBorrowAction } from '../borrowHistory/borrowAction';
import Stars from '../../components/star/Stars';

const BookLanding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { reviews } = useSelector((state) => state.reviewInfo);
  const { title, author, year, thumbnail, summary, isAvailable, dueDate } =
    books.find((item) => item._id === _id) || {};
  if (!title) {
    navigate('/');
  }

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

  const reviewList = reviews.filter(
    ({ bookID, status }) => bookID === _id && status === 'active'
  );

  const star =
    reviewList.reduce((acc, item) => acc + item?.star, 0) / reviewList?.length;
  console.log(star);
  console.log(reviewList, reviews);
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
              <p>
                <Stars num={star} />
              </p>
              <p>{summary}</p>
              {user?._id ? (
                <div className="d-grid">
                  {isAvailable ? (
                    <Button onClick={handleOnBorrow} variant="dark">
                      Borrow Now
                    </Button>
                  ) : (
                    <Button onClick={handleOnBorrow} disabled variant="dark">
                      Available from : {dueDate?.slice(0, 10)}
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
              <div className="review-lists">
                {reviewList.map(
                  ({ _id, title, message, star, userName }, i) => (
                    <div
                      key={i}
                      className="w-50 d-flex justify-content-center align-items-center"
                    >
                      <div className="left-name d-flex justify-content-center align-items-center fs-3 bg-secondary-subtle">
                        {userName[0].toUpperCase()}
                      </div>

                      <div className="right-description">
                        <h4>{title}</h4>
                        <div>
                          <Stars num={star} />
                        </div>
                        <p>{message}</p>
                        <p className="text-end">-{userName}</p>
                      </div>
                    </div>
                  )
                )}
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
