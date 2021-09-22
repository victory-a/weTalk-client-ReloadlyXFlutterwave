import React from "react";

import Button from "components/Button";
import NavBar from "components/Navbar";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.headerContainer}>
        <h1>Top-up mobile airtime from anywhere around the world in any currency</h1>
        <p>You can still top-up your mobile wallet airtime even without your local currency.</p>

        <div className={styles.buttonContainer}>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
