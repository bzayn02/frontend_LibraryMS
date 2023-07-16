import React from 'react';
import UserLayout from '../../components/layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Table } from 'react-bootstrap';
import { updateReviewAction } from './reviewAction';

const Reviews = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewInfo);

  const handleOnChange = (e) => {
    if (window.confirm('Are you sure you want to change the status?')) {
      const { value, checked } = e.target;
      console.log(value, checked);

      // call api and update "status" in database
      dispatch(
        updateReviewAction({
          _id: value,
          status: checked ? 'active' : 'inactive',
        })
      );
    }
  };

  return (
    <UserLayout title="Reviews">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Book</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                {' '}
                <Form.Check
                  type="switch"
                  title="status"
                  onChange={handleOnChange}
                  value={review?._id}
                  checked={review?.status === 'active'}
                ></Form.Check>
                {review.status}
              </td>
              <td>
                <h4>{review.bookName}</h4>
                <br /> Reviewed By: {review.userName}
              </td>

              <td>
                <h4>{review.title}</h4> <br />
                {review.message}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default Reviews;
