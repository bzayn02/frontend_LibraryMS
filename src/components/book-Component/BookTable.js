import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Thumbnail</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} width="150px" alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.year}</td>

              <td>
                {' '}
                <Link to={`/books/edit-book/${item._id}`}>
                  <Button variant="secondary">Edit</Button>
                </Link>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookTable;
