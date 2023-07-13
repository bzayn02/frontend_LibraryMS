import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CustomCard = ({ title, author, thumbnail, summary }) => {
  return (
    <Card
      style={{ width: '18rem', height: '40rem' }}
      className="card-style mb-5"
    >
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{author}</Card.Title>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
