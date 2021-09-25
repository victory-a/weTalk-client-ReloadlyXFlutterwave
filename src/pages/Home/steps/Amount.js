import React from "react";

import { useProvider } from "Context/Provider";
import { AmountInput } from "components/TextInput";
import Button from "components/Button";

import styles from "../styles.module.scss";

const Amount = () => {
  const { goGorward, goBack, state, setFormValue } = useProvider();

  function handleSubmit(e) {
    e.preventDefault();
    goGorward();
  }

  function handleChange(e) {
    setFormValue(e.target.name, e.target.value);
  }

  return (
    <div className={styles.stepsContainer}>
      <form onSubmit={handleSubmit}>
        <AmountInput
          label="Enter amount to top-up"
          name="amount"
          placeholder="5,000"
          value={state.amount}
          onChange={handleChange}
          min={10}
          required
        />

        <div className={styles.buttonContainer}>
          <Button onClick={goBack} outline={true} type="button">
            Back
          </Button>
          <Button disabled={state.amount > 2000}>Continue</Button>
        </div>
      </form>
    </div>
  );
};

export default Amount;
