import React from "react";

import { useProvider } from "Context/Provider";

import Button from "components/Button";
import SelectInput from "components/Select";

import styles from "../styles.module.scss";

const countries = [
  { label: "Nigeria", value: "NGN" },
  { label: "Egypt", value: "EGY" }
];
const Country = () => {
  const { goGorward } = useProvider();

  function handleSubmit(e) {
    e.preventDefault();
    goGorward();
  }

  return (
    <div className={styles.stepsContainer}>
      <form onSubmit={handleSubmit}>
        <SelectInput
          label="Select your country"
          placeholder="select country"
          options={countries}
          required
        />
        <Button>Contunue</Button>
      </form>
    </div>
  );
};

export default Country;
