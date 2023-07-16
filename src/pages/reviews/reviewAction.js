import { toast } from 'react-toastify';
import {
  getReviews,
  postReview,
  updateReviews,
} from '../../helper/axiosHelper';
import { fetchBorrowAction } from '../borrowHistory/borrowAction';
import { setModalShow } from '../../system/systemSlice';
import { setReviews } from './reviewSlice';

export const postReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await postReview(obj);
  toast[status](message);

  if (status === 'success') {
    dispatch(setModalShow(false));
    dispatch(fetchBorrowAction());
    dispatch(fetchReviewAction());
  }
};

export const fetchReviewAction = () => async (dispatch) => {
  const { status, reviews } = await getReviews();
  if (status === 'success') {
    dispatch(setReviews(reviews));
  }
};

export const updateReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await updateReviews(obj);
  toast[status](message);
  if (status === 'success') {
    dispatch(fetchReviewAction());
  }
};
