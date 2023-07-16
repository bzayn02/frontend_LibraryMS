import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userReducer from './pages/signup-signin/userSlice';
import bookReducer from './pages/books/bookSlice';
import borrowReducer from './pages/borrowHistory/borrowSlice';
import usersReducer from './pages/students/UsersSlice';
import reviewReducer from './pages/reviews/reviewSlice';
import systemReducer from './system/systemSlice';

const userPersistConfig = {
  key: 'userInfo',
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    allUsersInfo: usersReducer,
    bookInfo: bookReducer,
    borrowInfo: borrowReducer,
    system: systemReducer,
    reviewInfo: reviewReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
