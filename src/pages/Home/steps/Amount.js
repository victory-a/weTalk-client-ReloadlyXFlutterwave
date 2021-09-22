import React from "react";

import { useProvider } from "Context/Provider";
import { AmountInput } from "components/TextInput";
import Button from "components/Button";

import styles from "../styles.module.scss";

const Amount = () => {
  const { goGorward } = useProvider();

  function handleSubmit(e) {
    e.preventDefault();
    goGorward();
  }

  return (
    <div className={styles.stepsContainer}>
      <form onSubmit={handleSubmit}>
        <AmountInput label="Enter amount to top-up" name="amount" placeholder="5,000" required />
        <Button>Contunue</Button>
      </form>
    </div>
  );
};

export default Amount;
