import React from "react";

import { useProvider } from "Context/Provider";

import TextInput from "components/TextInput";
import Button from "components/Button";

import styles from "../styles.module.scss";

const Email = () => {
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
        <TextInput
          label="Enter your email address"
          name="email"
          placeholder="example@flutt.com"
          type="email"
          onChange={handleChange}
          value={state.email}
          autoFocus={true}
          required
        />

        <div className={styles.buttonContainer}>
          <Button onClick={goBack} outline={true} type="button">
            Back
          </Button>
          <Button disabled={!state.email}>Continue</Button>
        </div>
      </form>
    </div>
  );
};

export default Email;
