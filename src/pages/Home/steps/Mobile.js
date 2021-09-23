import React from "react";

import { useProvider } from "Context/Provider";

import { AiFillLock } from "react-icons/ai";
import { PhoneNumberInput } from "components/TextInput";
import Button from "components/Button";

import styles from "../styles.module.scss";

const Mobile = ({ pay }) => {
  // eslint-disable-next-line no-unused-vars
  const { goGorward, goBack } = useProvider();

  function handleSubmit(e) {
    e.preventDefault();
    pay();
    // goGorward();
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

        <div className={styles.buttonContainer}>
          <Button onClick={goBack} outline type="button">
            Back
          </Button>

          <Button>
            <AiFillLock />
            Pay $7.49
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Mobile;
