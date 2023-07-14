import { toast } from 'react-toastify';
import {
  fetchBorrowHistory,
  postBorrow,
  returnBorrow,
} from '../../helper/axiosHelper';
import { getBookAction } from '../books/bookAction';
import { setBorrows } from './borrowSlice';

export const addBorrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBorrow(obj);
  toast[status](message);

  if (status === 'success') {
    // fetch user borrow
    dispatch(getBookAction());
  }
};

export const fetchBorrowAction = () => async (dispatch) => {
  const { status, borrowHistory } = await fetchBorrowHistory();

  if (status === 'success') {
    // fetch user borrow
    dispatch(setBorrows(borrowHistory));
  }
};

export const returnBorrowAction = (obj) => async (dispatch) => {
  const { status, message } = await returnBorrow(obj);
  toast[status](message);
  if (status === 'success') {
    // fetch user borrow
    dispatch(fetchBorrowAction());
    dispatch(getBookAction());
  }
};
