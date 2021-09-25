/* eslint-disable no-console */
import React from "react";
import cogoToast from "cogo-toast";
import { v4 as uuidv4 } from "uuid";

import { useProvider } from "Context/Provider";

import { AiFillLock } from "react-icons/ai";
import { PhoneNumberInput } from "components/TextInput";
import Button from "components/Button";

import styles from "../styles.module.scss";
import { getOperator, verifyPaymentAndTopup } from "utils/requests";
import { removeEmptySpace, removeCommas } from "utils/textFormatters";

const flutterWavePayload = {
  public_key: process.env.REACT_APP_PUBLIC_KEY,
  tx_ref: `${uuidv4()}-${Date.now()}`, //arbitary reference generaior
  payment_options: " ",
  customer: {},
  customizations: {
    title: "Topup X",
    description: "Payment airtime purchase"
  },
  onclose: function() {
    return;
  }
};

const Mobile = ({ pay }) => {
  // eslint-disable-next-line no-unused-vars
  const { goGorward, goBack, state, setFormValue, isLoading, setIsLoading } = useProvider();

  function handleChange(e) {
    setFormValue(e.target.name, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const operatorPayload = {
      countryisocode: state?.country?.isoName,
      phoneNumber: removeEmptySpace(`${state.callingCode}${state?.mobile}`)
    };

    const topUpPayload = {
      amount: Number(removeCommas(state?.amount)),
      // senderCountryCode: state?.country?.isoName,
      // senderNumber: "08102944117",
      recipientNumber: operatorPayload.phoneNumber,
      recipientCountryCode: state?.country?.isoName,
      customIdentifier: flutterWavePayload.tx_ref
    };

    flutterWavePayload.amount = Number(removeCommas(state?.amount));
    flutterWavePayload.currency = state?.country?.currencyCode;
    flutterWavePayload.country = state?.country?.isoName;
    flutterWavePayload.customer.email = state.email;
    flutterWavePayload.customer.phone_number = operatorPayload.phoneNumber;
    flutterWavePayload.customer.name = "Topup X";
    flutterWavePayload.callback = function(data) {
      // verify payment and charge card
      if (data?.status === "successful") {
        verifyPaymentAndTopup(topUpPayload)
          .then(() => {
            setIsLoading(false);
            goGorward();
          })

          .catch(() => {
            setIsLoading(false);
            cogoToast.error("Airtime purchased failed 😩, try again", { hideAfter: 20 });
          });
      }
    };

    getOperator(operatorPayload)
      .then(response => {
        if (response?.data?.operatorId) {
          topUpPayload.operatorId = response?.data?.operatorId;
        }
        pay(flutterWavePayload);
      })
      .catch(() => {
        setIsLoading(false);

        cogoToast.error("Failed to verify mobile number, try again", { hideAfter: 7 });
      });
  }

  return (
    <div className={styles.stepsContainer}>
      <form onSubmit={handleSubmit}>
        <PhoneNumberInput
          label="Enter phone number"
          name="mobile"
          placeholder="08012345678"
          defaultPrefix={state.callingCode}
          options={state.country.callingCodes}
          onChange={handleChange}
          required
        />

        <div className={styles.buttonContainer}>
          <Button onClick={goBack} outline={true} type="button">
            Back
          </Button>

          <Button type="submit" isLoading={isLoading}>
            <AiFillLock />
            Pay $7.49
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Mobile;
