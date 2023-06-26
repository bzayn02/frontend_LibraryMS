import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/custom-input/CustomInput';
import { toast } from 'react-toastify';
import { postUser } from '../../helper/axiosHelper';

const Signup = () => {
  const [form, setForm] = useState({});

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

      <section className="main d-flex flex-column align-items-center justify-content-center">
        <h1>Add New Admin</h1>
        <Form
          onSubmit={handleOnSubmit}
          className="p-5 border-2 shadow-lg w-full"
        >
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
