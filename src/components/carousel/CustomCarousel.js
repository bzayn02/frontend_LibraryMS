import React from 'react';
import { Carousel } from 'react-bootstrap';
import a from '../../assets/abc.avif';
import b from '../../assets/def.avif';
import c from '../../assets/ghi.avif';

const CustomCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={a} alt="First slide" />
          <Carousel.Caption className="fs-2 carousel-caption">
            <h1>Online Library</h1>
            <p>
              We make Library Experience much easier, efficient and productive.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={b} alt="Second slide" />

          <Carousel.Caption className="fs-2 carousel-caption">
            <h1>Library Management System</h1>
            <p>Borrowing book is easier than ever.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c} alt="Third slide" />

          <Carousel.Caption className="fs-2 carousel-caption">
            <h1>Online Library</h1>
            <p>Students' productivity is our focus.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
