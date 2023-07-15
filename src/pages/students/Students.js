import React, { useEffect } from 'react';
import UserLayout from '../../components/layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './UsersAction';
import { Table } from 'react-bootstrap';

const Students = () => {
  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.allUsersInfo);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <UserLayout title="Students">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map(
            (user, i) =>
              user?.role === 'student' && (
                <tr>
                  <td>{i + 1}</td>
                  <td>{user?.fname}</td>
                  <td>{user?.lname}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.email}</td>
                  <td>{user?.address}</td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default Students;
