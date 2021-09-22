import React from "react";
import styles from "./styles.module.scss";

const Button = props => {
  return (
    <button type="submit" {...props} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
