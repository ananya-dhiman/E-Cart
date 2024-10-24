import React from 'react';
import styles from '../styles/loader.module.css'; 
export function Loader(){
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
