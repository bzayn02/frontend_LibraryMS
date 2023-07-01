import React from 'react';
import { useSelector } from 'react-redux';
import UserLayout from '../../components/layout/UserLayout';

const Books = () => {
  const { user } = useSelector((state) => state.userInfo);

  return user?.role !== 'admin' ? (
    <h1>Unauthorized Access</h1>
  ) : (
    <UserLayout title="Books">Books</UserLayout>
  );
};

export default Books;
