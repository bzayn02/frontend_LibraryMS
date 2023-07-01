import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup-signin/Signup';
import Signin from './pages/signup-signin/Signin';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/dashboard/Dashboard';
import PrivateRoute from './components/privateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/new-admin"
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Signin />} />
        {/* Private Routes */}{' '}
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
