import React from "react";

import { useProvider } from "Context/Provider";

import Button from "components/Button";
import SelectInput from "components/Select";

import styles from "../styles.module.scss";
import { getCountries } from "utils/requests";

function formatCountryData(countries) {
  if (countries.length > 0) {
    for (const country of countries) {
      country.value = country.isoName;
      country.label = country.name;
    }
    return countries;
  } else {
    return [];
  }
}

const Country = () => {
  const { goGorward, goBack, state, setFormValue, isLoading, setIsLoading } = useProvider();

  const [countriesData, setCountriesData] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    getCountries()
      .then(response => {
        setCountriesData(response);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countries = React.useMemo(() => formatCountryData(countriesData), [countriesData]);

  function handleSubmit(e) {
    e.preventDefault();
    goGorward();
  }

  function handleSelect(value) {
    setFormValue("country", value);
    setFormValue("callingCode", value?.callingCodes?.[0] ?? "");
  }

  return (
    <div className={styles.stepsContainer}>
      <form onSubmit={handleSubmit}>
        <SelectInput
          label="Select your country"
          placeholder="select country"
          options={countries}
          isLoading={isLoading}
          value={state.country}
          onChange={handleSelect}
          autoFocus={true}
          required
        />

        <div className={styles.buttonContainer}>
          <Button onClick={goBack} outline={true} type="button">
            Back
          </Button>
          <Button disabled={Object.entries(state.country).length === 0}>Continue</Button>
        </div>
      </form>
    </div>
  );
};

export default Country;
