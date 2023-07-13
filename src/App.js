import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup-signin/Signup';
import Signin from './pages/signup-signin/Signin';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/dashboard/Dashboard';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Books from './pages/books/Books';
import BorrowHistory from './pages/borrowHistory/BorrowHistory';
import Profile from './pages/profile/Profile';
import Students from './pages/students/Students';
import NewBookForm from './components/book-Component/NewBookForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBookAction } from './pages/books/bookAction';
import EditBookForm from './components/book-Component/EditBookForm';
import BookLanding from './pages/books/BookLanding';

function App() {
  const dispatch = useDispatch();
  // Fetching book

  useEffect(() => {
    dispatch(getBookAction());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/book/:_id" element={<BookLanding />} />

        {/* Private Routes */}

        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/books/new-book"
          element={
            <PrivateRoute>
              <NewBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/books/edit-book/:_id"
          element={
            <PrivateRoute>
              <EditBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/borrow-history"
          element={
            <PrivateRoute>
              <BorrowHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/students"
          element={
            <PrivateRoute>
              <Students />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
