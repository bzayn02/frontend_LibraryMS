import axios from 'axios';

const rootAPI = 'http://localhost:8000/api/v1';
const userAPI = rootAPI + '/user';
const bookAPI = rootAPI + '/book';
const borrowAPI = bookAPI + '/borrow';
const reviewAPI = rootAPI + '/review';

// Get user ID for authentication
const getUserIdFromLocalStorage = () => {
  const str = localStorage.getItem('persist:userInfo');
  if (str) {
    const userInfo = JSON.parse(str);
    if (userInfo?.user) {
      const user = JSON.parse(userInfo.user);
      return user._id;
    }
  }
  return null;
};

//// Users /////
export const postUser = async (userData) => {
  try {
    const response = await axios.post(userAPI, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
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
      message: error.message,
    };
  }
};

// Get all users

export const getUsers = async () => {
  try {
    const { data } = await axios.get(userAPI, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

///// Books //////
export const postBook = async (bookData) => {
  try {
    const response = await axios.post(bookAPI, bookData, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

export const getBooks = async () => {
  try {
    const { data } = await axios.get(bookAPI);
    return data;
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

//Update book
export const updateBook = async (bookData) => {
  try {
    const response = await axios.put(bookAPI, bookData);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

// Delete book
export const deleteBook = async (_id) => {
  try {
    const response = await axios.delete(bookAPI + '/' + _id, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

///// Borrow //////
export const postBorrow = async (borrowData) => {
  try {
    const { data } = await axios.post(borrowAPI, borrowData, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

// Fetch borrow history
export const fetchBorrowHistory = async () => {
  try {
    const { data } = await axios.get(borrowAPI, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

export const returnBorrow = async (obj) => {
  try {
    const { data } = await axios.put(borrowAPI, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

///// Review //////
// Post Review
export const postReview = async (obj) => {
  try {
    const { data } = await axios.post(reviewAPI, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

// Get Reviews
export const getReviews = async () => {
  try {
    const { data } = await axios.get(reviewAPI);
    return data;
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};
// Update Reviews
export const updateReviews = async (obj) => {
  try {
    const { data } = await axios.patch(reviewAPI, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};
