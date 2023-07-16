import React, { useEffect, useState } from 'react';
import UserLayout from '../../components/layout/UserLayout';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBorrowAction, returnBorrowAction } from './borrowAction';
import ReviewForm from '../../components/review/ReviewForm';
import CustomModal from '../../components/modal/CustomModal';
import { setModalShow } from '../../system/systemSlice';

const BorrowHistory = () => {
  const [selectedReview, setSelectedReview] = useState({});
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

  const handleOnReview = (borrowBook) => {
    setSelectedReview(borrowBook);
    dispatch(setModalShow(true));
  };
  return (
    <UserLayout title="Borrow History">
      {selectedReview?._id && (
        <CustomModal
          modalTitle={`Leave your review for ${selectedReview?.bookName}`}
        >
          <ReviewForm selectedReview={selectedReview} />
        </CustomModal>
      )}

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
              <td>{borrow?.returnDate?.slice(0, 10)}</td>
              <td>
                {borrow.userID === user._id && !borrow.isReturned ? (
                  <Button onClick={() => handleOnReturn(borrow)}>Return</Button>
                ) : borrow?.isReviewGiven ? (
                  'Review Given'
                ) : (
                  <Button
                    variant="success"
                    onClick={() => handleOnReview(borrow)}
                  >
                    Leave Review
                  </Button>
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
