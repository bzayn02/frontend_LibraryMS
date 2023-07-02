import { toast } from 'react-toastify';
import {
  deleteBook,
  getBooks,
  postBook,
  updateBook,
} from '../../helper/axiosHelper';
import { setBooks } from './bookSlice';

export const postBookAction = (bookObj) => async (dispatch) => {
  const dataPending = postBook(bookObj);
  toast.promise(dataPending, {
    pending: 'Please wait...',
  });

  const { status, message } = await dataPending;
  toast[status](message);
  if (status === 'success') {
    dispatch(getBookAction());
  }
};

export const getBookAction = () => async (dispatch) => {
  const { status, books } = await getBooks();

  if (status === 'success') {
    dispatch(setBooks(books));
  }
};

export const updateBookAction = (bookObj) => async (dispatch) => {
  const dataPending = updateBook(bookObj);
  toast.promise(dataPending, {
    pending: 'Please wait...',
  });

  const { status, message } = await dataPending;
  toast[status](message);
  if (status === 'success') {
    dispatch(getBookAction());
  }
};
export const deleteBookAction = (_id) => async (dispatch) => {
  const dataPending = deleteBook(_id);
  toast.promise(dataPending, {
    pending: 'Please wait...',
  });

  const { status, message } = await dataPending;
  toast[status](message);
  if (status === 'success') {
    dispatch(getBookAction());
    return status;
  }
};
