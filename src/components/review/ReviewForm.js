import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../custom-input/CustomInput';
import { AiFillStar } from 'react-icons/ai';
import { postReviewAction } from '../../pages/reviews/reviewAction';
import { useDispatch } from 'react-redux';

const ReviewForm = ({ selectedReview }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    status: 'inactive',
    star: 5,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, bookID, bookName, userID, userName } = selectedReview;
    const obj = {
      borrowHistoryID: _id,
      bookID,
      bookName,
      userID,
      userName,
      ...form,
    };
    console.log(obj);
    dispatch(postReviewAction(obj));
  };

  console.log(selectedReview);
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Title"
          name="title"
          onChange={handleOnChange}
          required
          placeholder="Best book I've ever read. "
        />

        <Form.Group className="mb-3">
          <Form.Label>Leave Rating</Form.Label>
          <div className="fs-3">
            <input
              className="d-none"
              value="1"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s1"
            />
            <label htmlFor="s1">
              <AiFillStar />
            </label>
            <input
              className="d-none"
              value="2"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s2"
            />
            <label htmlFor="s2">
              <AiFillStar />
            </label>
            <input
              className="d-none"
              value="3"
              onChange={handleOnChange}
              type="radio"
              name="star"
              required
              id="s3"
            />
            <label htmlFor="s3">
              <AiFillStar />
            </label>
            <input
              className="d-none"
              value="4"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s4"
            />
            <label htmlFor="s4">
              <AiFillStar />
            </label>
            <input
              className="d-none"
              value="5"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s5"
            />
            <label htmlFor="s5">
              <AiFillStar />
            </label>
          </div>
        </Form.Group>

        <CustomInput
          label="Review Message"
          name="message"
          required
          as="textarea"
          onChange={handleOnChange}
          rows="5"
          placeholder="Best book ever. Most beautifully and simply information is delivered. High value book. "
        />
        <div className="d-grid">
          <Button variant="success" type="submit">
            Submit Review
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ReviewForm;
