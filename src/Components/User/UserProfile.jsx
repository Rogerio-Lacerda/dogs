import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <>
      <Head title={user} />
      <div className="container mainContainer">
        <h1 className="title">{user}</h1>
        <Feed user={user} />
      </div>
    </>
  );
};

export default UserProfile;
