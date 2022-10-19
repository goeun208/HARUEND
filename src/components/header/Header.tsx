import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  
  return (
    <div className={styles.wrap}>
      <Link to="/">home</Link>
      <Link to="/write">write</Link>
      <Link to="/list">list</Link>
    </div>
  );
}

export default Header;