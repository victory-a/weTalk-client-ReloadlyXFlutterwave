import React from "react";
import { ReactComponent as EmptyLogo } from "assets/empty-saved.svg";
import { container } from "./styles.module.scss";

function EmptyState() {
  return (
    <div className={container}>
      <EmptyLogo />

      <div>
        <p>No content, Please try later :(</p>
      </div>
    </div>
  );
}

export default EmptyState;
