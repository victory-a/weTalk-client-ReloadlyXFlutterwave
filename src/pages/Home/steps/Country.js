/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React from "react";

import { useProvider } from "Context/Provider";

import Button from "components/Button";
import SelectInput from "components/Select";

import flag from "assets/NG.png";
import styles from "../styles.module.scss";
import { getCountries } from "utils/requests";

const countries = [
  { label: "Nigeria", value: "NGN", flag: flag },
  { label: "Egypt", value: "EGY", flag: flag }
];
const Country = () => {
  const { goGorward, goBack, formValues, setFormValues } = useProvider();
  const [isLoading, setIsLoading] = React.useState(false);
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    getCountries().then(response => {
      setCountries(response);
    });
  }, []);

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

        <div className={styles.buttonContainer}>
          <Button onClick={goBack} outline type="button">
            Back
          </Button>
          <Button>Continue</Button>
        </div>
      </form>
    </div>
  );
};

export default Country;
