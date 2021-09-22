import React from "react";

import { useProvider } from "Context/Provider";

import TextInput from "components/TextInput";
import Button from "components/Button";

import styles from "../styles.module.scss";

const Email = () => {
  const { goGorward } = useProvider();

  function handleSubmit(e) {
    e.preventDefault();
    goGorward();
  }

  return (
    <div className={styles.stepsContainer}>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Enter your email address"
          name="email"
          placeholder="example@flutt.com"
          type="email"
          required
        />
        <Button>Contunue</Button>
      </form>
    </div>
  );
};

export default Email;
