import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
};

const userSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllUsers: (state, { payload }) => {
      state.allUsers = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setAllUsers } = actions;

export default reducer;
