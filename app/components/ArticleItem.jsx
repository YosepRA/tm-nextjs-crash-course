import React from 'react';
import Link from 'next/link';

import styles from '../styles/Article.module.css';

const ArticleItem = function ArticleItemComponent({ article }) {
  return (
    <Link
      href="/articles/[id]"
      as={`/articles/${article.id}`}
      className={styles.card}
    >
      <div>
        <h3>{article.title} &rarr;</h3>

        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
