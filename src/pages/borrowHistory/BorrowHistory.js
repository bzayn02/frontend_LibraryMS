import React, { useEffect } from 'react';
import UserLayout from '../../components/layout/UserLayout';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBorrowAction, returnBorrowAction } from './borrowAction';

const BorrowHistory = () => {
  const { borrows } = useSelector((state) => state.borrowInfo);
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBorrowAction());
  }, [dispatch]);

  const handleOnReturn = ({ bookID, _id }) => {
    const obj = { bookID, borrowID: _id };
    if (window.confirm('Are you sure you want to return the book?')) {
      console.log(obj);
      dispatch(returnBorrowAction(obj));
    }
  };
  return (
    <UserLayout title="Borrow History">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Book Name</th>
            <th>Student Name</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrows.map((borrow, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                <img src={borrow.thumbnail} alt="" />
              </td>
              <td>{borrow.bookName}</td>
              <td>{borrow.userName}</td>
              <td>{borrow?.dueDate?.slice(0, 10)}</td>
              <td>{borrow.returnDate}</td>
              <td>
                {borrow.userID === user._id && !borrow.isReturned ? (
                  <Button onClick={() => handleOnReturn(borrow)}>Return</Button>
                ) : (
                  <Button variant="success">Leave Review</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default BorrowHistory;
