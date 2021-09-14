import React from "react";
import { CgSpinner } from "react-icons/cg";
import { container, container_inline } from "./styles.module.scss";

export function FullPageSpinner() {
  return (
    <div className={container}>
      <CgSpinner fontSize={35} aria-label="loading" />
    </div>
  );
}

export function Spinner() {
  return (
    <div className={container_inline}>
      <CgSpinner aria-label="loading" />
    </div>
  );
}
