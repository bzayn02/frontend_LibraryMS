import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/custom-input/CustomInput';
import Footer from '../../components/layout/Footer';

import { signInAdminAction } from './userAction';
import { useDispatch } from 'react-redux';

const Signin = () => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAdminAction(form));
  };

  const inputs = [
    {
      label: 'Email',
      name: 'email',
      required: true,
      placeholder: 'sba@gmail.com',
      type: 'text',
    },
    {
      label: 'Password',
      name: 'password',
      required: true,
      placeholder: '11111111',
      type: 'password',
    },
  ];
  return (
    <div>
      <Header />
      <section className="main  d-flex align-items-center justify-content-center ">
        <div className="container">
          <div className="hero d-flex justify-content-center align-items-center flex-column">
            <h1 className="p-3">Admin Login</h1>
            <span>New here?</span>
            <div className="mt-2 fs-5 border border-secondary text-center p-2 rounded-3">
              <Link to="/new-admin" className="nav-link">
                Register Now
              </Link>
            </div>
          </div>
          <div className="registerform p-3 mt-4">
            <Form onSubmit={handleOnSubmit} className=" border-2 shadow-lg">
              {inputs.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              ))}
              <div className="d-flex justify-content-center d-grid">
                <Button className="btn btn-secondary " type="submit">
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

export default Signin;
