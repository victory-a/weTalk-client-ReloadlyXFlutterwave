import React from "react";
import styles from "./styles.module.scss";
import { CgSpinner } from "react-icons/cg";

const Button = ({ outline = false, isLoading, ...props }) => {
  return (
    <button
      type="submit"
      {...props}
      className={`${styles.button} ${outline ? styles.outline : ""} ${
        isLoading ? styles.loading : ""
      }`}
    >
      {!isLoading ? props.children : <CgSpinner fontSize={20} />}
    </button>
  );
};

export default Button;
