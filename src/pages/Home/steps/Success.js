import React from "react";

import styles from "../styles.module.scss";
import success from "assets/success.png";
import Button from "components/Button";
import { useProvider } from "Context/Provider";

const Success = () => {
  const { setPage } = useProvider();

  return (
    <div className={styles.success}>
      <img src={success} alt="successful pament" />
      <p>Payment Successful</p>

      <div className={styles.buttonContainer}>
        <Button onClick={() => setPage(0)}>Back to Home</Button>
      </div>
    </div>
  );
};

export default Success;
