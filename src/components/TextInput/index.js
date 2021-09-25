/* eslint-disable indent */
import React from "react";
import NumberFormat from "react-number-format";
import styles from "./styles.module.scss";

const TextInput = props => {
  const { name, label = "", required = true } = props;

  return (
    <fieldset className={styles.container}>
      <label htmlFor={name}>
        {label} {required ? <span className={styles.required}>*</span> : null}
      </label>
      <input {...props} maxLength={255} />
    </fieldset>
  );
};

export default TextInput;

export const PhoneNumberInput = ({ defaultPrefix, ...props }) => {
  const { name, label = "", options = [], required = true } = props;

  return (
    <fieldset className={styles.container}>
      <label htmlFor={name}>
        {label} {required ? <span className={styles.required}>*</span> : null}
      </label>

      <div className={styles.inputGroup}>
        <select id={name}>
          <option value="" disabled className={styles.placeholder}>
            {props.defaultPrefix}
          </option>

          {options.length > 0
            ? options.map((code, i) => {
                return (
                  <option value={code} key={`option-${i}`}>
                    {code}
                  </option>
                );
              })
            : null}
        </select>

        <NumberFormat
          title="Provide a valid phone number"
          autoComplete="tel"
          type="tel"
          {...props}
        />
      </div>
    </fieldset>
  );
};

export const AmountInput = props => {
  const { disabled = false } = props;

  return (
    <fieldset className={styles.container}>
      <NumberFormat
        decimalScale={2}
        disabled={disabled}
        allowNegative={false}
        thousandSeparator={true}
        customInput={TextInput}
        // empty string on prefix prop is iintentional to fix bug from package
        prefix=""
        {...props}
      />
    </fieldset>
  );
};
