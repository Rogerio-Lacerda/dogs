import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <>
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos."
      />
      <section className="container mainContainer">
        <Feed />
      </section>
    </>
  );
};

export default Home;
