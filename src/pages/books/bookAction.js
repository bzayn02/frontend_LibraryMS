import { toast } from 'react-toastify';
import { postBook } from '../../helper/axiosHelper';

export const postBookAction = (bookObj) => async (dispatch) => {
  const dataPending = postBook(bookObj);
  toast.promise(dataPending, {
    pending: 'Please wait...',
  });

  const { status, message } = await dataPending;

  if (status === 'success') {
    toast[status](message);
  }
};
