import { toast } from 'react-toastify';
import { loginUser } from '../../helper/axiosHelper';
import { setUser } from './userSlice';

export const signInAdminAction = (userObj) => async (dispatch) => {
  const { status, message, userData } = await loginUser(userObj);
  toast[status](message);

  userData?._id && dispatch(setUser(userData));
};
