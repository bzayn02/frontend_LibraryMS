import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../custom-input/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import UserLayout from '../layout/UserLayout';
import {
  deleteBookAction,
  updateBookAction,
} from '../../pages/books/bookAction';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditBookForm = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { books } = useSelector((state) => state.bookInfo);
  const dispatch = useDispatch();
  const { _id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((item) => item._id === _id);
      selectedBook?._id && setForm(selectedBook);
    }
  }, [_id, form._id, books]);

  const inputs = [
    {
      label: 'Book title',
      name: 'title',
      type: 'text',
      placeholder: 'How to become JS Master',
      required: true,
      value: form.title,
    },
    {
      label: 'Author',
      name: 'author',
      type: 'text',
      placeholder: 'Uncle Bob',
      required: true,
      value: form.author,
    },
    {
      label: 'Year of Release',
      name: 'year',
      type: 'number',
      required: true,
      value: form.year,
    },
    {
      label: 'Thumbnail',
      name: 'thumbnail',
      type: 'url',
      placeholder: 'http://....',
      required: true,
      value: form.thumbnail,
    },
    {
      label: 'Summary',
      name: 'summary',
      type: 'text',
      as: 'textarea',
      placeholder: 'Book Summary',
      required: true,
      rows: 5,
      value: form.summary,
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(updateBookAction(form));
  };

  const handleOnDelete = async () => {
    if (window.confirm('Are you sure you want to delete the book?')) {
      const isDeleted = await dispatch(deleteBookAction(_id));
      isDeleted === 'success' && navigate('/books');
    }
  };

  return (
    <UserLayout title="Edit Book">
      {user?.role !== 'admin' ? (
        <h1>Unauthorized...</h1>
      ) : (
        <div className="py-3">
          <Link to="/books">
            <Button className="btn btn-secondary mb-3">&lt; Back</Button>
          </Link>
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            <div className="d-grid">
              <Button className="btn btn-success" type="submit">
                Update Book
              </Button>
            </div>
          </Form>
          <div className="d-flex justify-content-center">
            <Button
              className="btn btn-danger mt-3"
              type="submit"
              onClick={handleOnDelete}
            >
              Delete Book
            </Button>
          </div>
        </div>
      )}
    </UserLayout>
  );
};

export default EditBookForm;
