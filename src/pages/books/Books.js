import React from 'react';
import { useSelector } from 'react-redux';
import UserLayout from '../../components/layout/UserLayout';
import { Button } from 'react-bootstrap';
import BookTable from '../../components/book-Component/BookTable';
import { Link } from 'react-router-dom';

const Books = () => {
  const { user } = useSelector((state) => state.userInfo);

  return user?.role !== 'admin' ? (
    <h1>Unauthorized Access</h1>
  ) : (
    <UserLayout title="Books">
      <div className="text-end">
        <Link to="/new-book">
          <Button className="btn btn-secondary">Add New Book</Button>
        </Link>
      </div>

      <div className="mt-3">
        {/* Table  */}
        <BookTable />
      </div>
    </UserLayout>
  );
};

export default Books;
