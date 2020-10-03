import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Theo',
      image:
        'https://texashillcountry.com/wp-content/uploads/harveycat-660x400.jpg',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
