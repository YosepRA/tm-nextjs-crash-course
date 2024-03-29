import React from 'react';

import ArticleItem from './ArticleItem';
import styles from '../styles/Article.module.css';

const ArticleList = function ArticleListComponent({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
