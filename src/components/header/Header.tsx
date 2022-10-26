import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  
  return (
    <div className={styles.wrap}>
      <div className={styles.top}></div>
      <div className={styles.box}>
        <Link to="/" className={styles.logo}>HARUEND</Link>
        <div className={styles.catebox}>
          <Link to="/" className={styles.category}>home</Link>
          <Link to="/write" className={styles.category}>write</Link>
          <Link to="/list" className={styles.category}>list</Link>
        </div>
        <div className={styles.logbox}>
          <Link to="/write" className={styles.category2}>Log In</Link>
          <Link to="/list" className={styles.category2}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;