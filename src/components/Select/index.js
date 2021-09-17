/* eslint-disable indent */
import React from "react";
import { useField } from "formik";

import styles from "./styles.module.scss";

const SelectInput = props => {
  const { name, label = "", options = [], required = true } = props;
  const [field] = useField(props);

  return (
    <fieldset className={styles.container}>
      <label htmlFor={name}>
        {label} {required ? <span className={styles.required}>*</span> : null}
      </label>
      <select id={name} {...field} {...props}>
        <option value="" disabled className={styles.placeholder}>
          {props.placeholder}
        </option>
        {options.length > 0
          ? options.map((_, i) => {
              return (
                <option value={_.value} key={`option-${i}`}>
                  {_.label}
                </option>
              );
            })
          : null}
      </select>
    </fieldset>
  );
};

export default SelectInput;
