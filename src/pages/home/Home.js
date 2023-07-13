import React, { useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Container } from 'react-bootstrap';
import CustomCarousel from '../../components/carousel/CustomCarousel';
import { useSelector } from 'react-redux';
import CustomCard from '../../components/custom-card/CustomCard';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);

  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(books);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredBooks = books.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(filteredBooks);
  };

  return (
    <div>
      <Header />
      <div className="page">
        <div className="hero">
          <CustomCarousel />
        </div>

        <Container>
          <div className="d-flex justify-content-around p-3 border border-3 my-5 rounded-3 bg-secondary-subtle">
            <div className="left">{display.length} books found</div>
            <div className="right">
              <Form.Control
                placeholder="Search book my name"
                onChange={handleOnSearch}
              ></Form.Control>
            </div>
          </div>
          <div className="book-list justify-content-between flex-wrap gap-4">
            {display.map((item) => (
              <Link to={`/book/${item._id}`}>
                {' '}
                <CustomCard {...item} />
              </Link>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
