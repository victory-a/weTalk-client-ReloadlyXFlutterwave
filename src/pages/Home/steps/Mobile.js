import React from "react";

import { useProvider } from "Context/Provider";

import { AiFillLock } from "react-icons/ai";
import { PhoneNumberInput } from "components/TextInput";
import Button from "components/Button";

import styles from "../styles.module.scss";

const Mobile = () => {
  const { goGorward } = useProvider();

  function handleSubmit(e) {
    e.preventDefault();
    goGorward();
  }

  return (
    <div className={styles.stepsContainer}>
      <form onSubmit={handleSubmit}>
        <PhoneNumberInput
          label="Enter phone number"
          name="amount"
          placeholder="08012345678"
          required
        />
        <Button>
          <AiFillLock />
          Pay $7.49
        </Button>
      </form>
    </div>
  );
};

export default Mobile;
