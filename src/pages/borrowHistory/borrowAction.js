import { toast } from 'react-toastify';
import { postBorrow } from '../../helper/axiosHelper';
import { getBookAction } from '../books/bookAction';

export const addBorrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBorrow(obj);
  toast[status](message);

  if (status === 'success') {
    // fetch user borrow
    dispatch(getBookAction());
  }
};
