import React from "react";

import Welcome from "./steps/Welcome";
import Country from "./steps/Country";
import Email from "./steps/Email";
import Amount from "./steps/Amount";
import Success from "./steps/Success";

import NavBar from "components/Navbar";

import styles from "./styles.module.scss";
import Mobile from "./steps/Mobile";
import { useProvider } from "Context/Provider";

function pay(payload) {
  return window.FlutterwaveCheckout(payload);
}

const steps = [<Welcome />, <Country />, <Email />, <Amount />, <Mobile pay={pay} />, <Success />];

const Home = () => {
  const { page } = useProvider();

  return (
    <div className={styles.container}>
      <NavBar />
      {steps[page]}
    </div>
  );
};

export default Home;
