import React from 'react';
import { Table } from 'react-bootstrap';

const BookTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Books</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BookTable;
