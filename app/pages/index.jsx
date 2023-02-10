import React from 'react';
import Head from 'next/head';

import ArticleList from '../components/ArticleList';

const Home = function HomeComponent({ articles }) {
  return (
    <div>
      <Head>
        <title>Welcome to Next</title>
      </Head>

      <h1>Welcome to Next</h1>

      <ArticleList articles={articles} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6',
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
}

export default Home;
