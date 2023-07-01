import React, { useState } from 'react';
import '../../App.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/custom-input/CustomInput';
import { toast } from 'react-toastify';
import { postUser } from '../../helper/axiosHelper';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Signup = () => {
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({
    role: 'student',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== form.password) {
      return toast.error('Password did not match!');
    }
    // call api

    const dataPromise = postUser(rest);
    toast.promise(dataPromise, {
      pending: 'Please Wait...',
    });

    const { status, message } = await dataPromise;
    toast[status](message);
  };

  const inputs = [
    {
      label: 'First Name',
      name: 'fname',
      required: true,
      placeholder: 'Sam',
      type: 'text',
    },
    {
      label: 'Last Name',
      name: 'lname',
      required: true,
      placeholder: 'Smith',
      type: 'text',
    },
    {
      label: 'Phone',
      name: 'phone',
      required: true,
      placeholder: '03334848',
      type: 'number',
    },
    {
      label: 'Email',
      name: 'email',
      required: true,
      placeholder: 'sam@email.com',
      type: 'text',
    },
    {
      label: 'Address',
      name: 'address',
      required: true,
      placeholder: '12 Albert Street, Rockdale',
      type: 'text',
    },
    {
      label: 'Password',
      name: 'password',
      required: true,
      placeholder: '******',
      type: 'password',
      minLength: '6',
    },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      required: true,
      placeholder: '******',
      type: 'password',
      minLength: '6',
    },
  ];
  return (
    <div>
      <Header />
      <section className="main">
        <div className="container">
          <div className="hero d-flex justify-content-center align-items-center flex-column">
            <h1 className="p-3">
              Create New Account{' '}
              {user?.role === 'admin' && (
                <Form.Select onChange={handleOnChange}>
                  <option value="">--Select--</option>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                </Form.Select>
              )}
            </h1>
            <span>Already have an account?</span>
            <div className="mt-2 fs-5 border border-secondary text-center p-2 rounded-3">
              <Link to="/login" className="nav-link">
                Log In
              </Link>
            </div>
          </div>
          <div className="registerform p-3 mt-4">
            <Form onSubmit={handleOnSubmit} className=" border-2 shadow-lg">
              {inputs.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              ))}
              <div className="d-flex justify-content-center">
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
