import axios from 'axios';

const rootAPI = 'http://localhost:8000';
const userAPI = rootAPI + '/api/v1/user';
const bookAPI = rootAPI + '/api/v1/book';

//// Users /////
export const postUser = async (userData) => {
  try {
    const response = await axios.post(userAPI, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: 'error.message',
    };
  }
};
export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userAPI + '/login', userData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: 'error.message',
    };
  }
};

///// Books //////
export const postBook = async (bookData) => {
  try {
    const response = await axios.post(bookAPI, bookData);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: 'error.message',
    };
  }
};
