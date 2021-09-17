import React from "react";
// import NumberFormat from "react-number-format";
import { useField } from "formik";
import styles from "./styles.module.scss";

const TextInput = props => {
  const { name, label = "", required = true } = props;
  const [field] = useField(props);

  return (
    <fieldset className={styles.container}>
      <label htmlFor={name}>
        {label} {required ? <span className={styles.required}>*</span> : null}
      </label>
      <input {...field} {...props} maxLength={255} />
    </fieldset>
  );
};

export default TextInput;

// export const PhoneNumberInput = props => {
//   const [field] = useField(props);

//   return (
//     <NumberFormat
//       title="Provide a valid phone number"
//       customInput={TextInput}
//       format="#### ### ####"
//       autoComplete="tel"
//       type="tel"
//       {...field}
//       {...props}
//     />
//   );
// };
