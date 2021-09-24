import React from "react";
import styles from "./styles.module.scss";

const Button = ({ outline = false, ...props }) => {
  return (
    <button
      type="submit"
      {...props}
      className={`${styles.button} ${outline ? styles.outline : ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
