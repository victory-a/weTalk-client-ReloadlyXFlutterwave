import React from "react";

import styles from "./styles.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <Logo />
      </a>

      <ul>
        <li>
          <a href="/'">Family & Friends</a>
        </li>
        <li>
          <a href="/">Language</a>
        </li>
        <li>
          <a href="/">Help</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
