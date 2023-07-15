import { getUsers } from '../../helper/axiosHelper';
import { setAllUsers } from './UsersSlice';

export const getAllUsers = () => async (dispatch) => {
  const { usersData } = await getUsers();
  console.log(usersData);

  usersData?.length && dispatch(setAllUsers(usersData));
};
