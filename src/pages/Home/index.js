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

const payload = {
  public_key: process.env.REACT_APP_PUBLIC_KEY,
  tx_ref: "RX1",
  amount: 10,
  currency: "USD",
  country: "US",
  payment_options: " ",
  // specified redirect URL
  // redirect_url: "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
  meta: {
    consumer_id: 23,
    consumer_mac: "92a3-912ba-1192a"
  },
  customer: {
    email: "cornelius@gmail.com",
    phone_number: "08102909304",
    name: "Flutterwave Developers"
  },
  callback: function(data) {
    // eslint-disable-next-line no-console
    console.log(data);
  },
  onclose: function() {
    // close modal
  }
  // customizations: {
  //   title: "My store",
  //   description: "Payment for items in cart",
  //   logo: "https://assets.piedpiper.com/logo.png"
  // }
};

function pay() {
  window.FlutterwaveCheckout(payload);
}

const steps = [<Welcome />, <Country />, <Email />, <Amount />, <Mobile pay={pay} />, <Success />];

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
