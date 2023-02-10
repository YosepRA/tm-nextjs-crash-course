import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Article = function ArticleComponent({ article }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Article {id}</title>
      </Head>

      <h1>{article.title}</h1>

      <p>{article.body}</p>

      <Link href="/">Go Back</Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}

export default Article;
