import React from "react";

import { useProvider } from "Context/Provider";
import Button from "components/Button";

import styles from "../styles.module.scss";

const Welcome = () => {
  const { goGorward } = useProvider();

  return (
    <div className={styles.headerContainer}>
      <h1>Top-up mobile airtime from anywhere around the world in any currency</h1>
      <p>You can still top-up your mobile wallet airtime even without your local currency.</p>

      <div className={styles.buttonContainer}>
        <Button onClick={goGorward}>Get Started</Button>
      </div>
    </div>
  );
};

export default Welcome;
