import React from "react";

import Welcome from "./steps/Welcome";
import Country from "./steps/Country";
import Email from "./steps/Email";
import Amount from "./steps/Amount";

import NavBar from "components/Navbar";

import styles from "./styles.module.scss";
import Mobile from "./steps/Mobile";
import { useProvider } from "Context/Provider";

const steps = [<Welcome />, <Country />, <Email />, <Amount />, <Mobile />];

const Home = () => {
  const { page } = useProvider();

  return (
    <div className={`${styles.container} ${page !== 0 ? styles.noBg : ""}`}>
      <NavBar />

      {steps[page]}
    </div>
  );
};

export default Home;
