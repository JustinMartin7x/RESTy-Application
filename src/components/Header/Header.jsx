import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>RESTy Application</h1>
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.navItem}>
          <Link to="/" className={styles.link} >Home</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/History" className={styles.link} >History</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/Help" className={styles.link}>Help
          </Link>
        </div>
      </div>
      
    </div>
  );
}

