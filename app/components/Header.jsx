import React from 'react';

import styles from '../styles/Header.module.css';

const Header = function HeaderComponent() {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>

      <p className={styles.description}>Keep up to date with the latest news</p>
    </div>
  );
};

export default Header;
