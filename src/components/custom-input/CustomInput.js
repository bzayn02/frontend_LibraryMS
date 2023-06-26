import React from 'react';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <FormControl {...rest} />
      </Form.Group>
    </div>
  );
};

export default CustomInput;
