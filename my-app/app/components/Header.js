"use client";
import {useCallback } from 'react';
import styles from '../Header.module.css';

const Header = () => {
  const onDefaultContainerClick = useCallback(() => {
    // Add your code here
  }, []);

return (
  <>
    <div className={styles.headerContainer}>
      <div className={styles.header}></div>
      <b className={styles.shannonHidalgo}>Shannon Hidalgo</b>
      <div className={styles.nav}></div>
      <div className={styles.tabDefault} onClick={onDefaultContainerClick}></div>
      </div>
   
  </>
);
}

export default Header;