/* eslint-disable indent */
import React from "react";
import styles from "./styles.module.scss";
import Select from "react-select";

export const SelectInput = props => {
  const {
    name,
    label,
    options = [],
    isSearchable = true,
    isMulti = false,
    required = true,
    isLoading = true
  } = props;

  return (
    <fieldset className={styles.container}>
      <label htmlFor={name}>
        {label} {required ? <span className={styles.required}>*</span> : null}
      </label>

      <div className={styles.selectContainer}>
        <Select
          {...{ name, options, isMulti, isSearchable, isLoading }}
          {...props}
          className={styles.reactSelectContainer}
          classNamePrefix={styles.reactSelect}
        />
      </div>
    </fieldset>
  );
};

export default SelectInput;
