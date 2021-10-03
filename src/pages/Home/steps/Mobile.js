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
import closePaymentModal from "utils/wave";
import { types } from "Context/reducer";

const flutterWavePayload = {
  public_key: process.env.REACT_APP_PUBLIC_KEY,
  tx_ref: `${uuidv4()}-${Date.now()}`, //arbitary reference generaior
  payment_options: " ",
  customer: {},
  customizations: {
    title: "Topup X",
    description: "Payment airtime purchase"
  }
};

const Mobile = ({ pay }) => {
  const {
    goGorward,
    goBack,
    state,
    setFormValue,
    isLoading,
    setIsLoading,
    dispatch
  } = useProvider();

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
      recipientNumber: operatorPayload.phoneNumber,
      recipientCountryCode: state?.country?.isoName
    };

    flutterWavePayload.amount = Number(removeCommas(state?.amount));
    flutterWavePayload.currency = state?.country?.currencyCode;
    flutterWavePayload.country = state?.country?.isoName;
    flutterWavePayload.customer.email = state.email;
    flutterWavePayload.customer.phone_number = operatorPayload.phoneNumber;
    flutterWavePayload.customer.name = "Topup X";
    flutterWavePayload.onclose = function() {
      setIsLoading(false);
      return;
    };
    flutterWavePayload.callback = function(data) {
      // verify payment and charge card
      if (data?.status === "successful") {
        verifyPaymentAndTopup({ ...topUpPayload, transactionRef: data?.transaction_id })
          .then(({ response = {} }) => {
            dispatch({
              type: types.SET_TRANSACTION_DETAILS,
              payload: {
                amount: response?.deliveredAmount,
                currency: response?.deliveredAmountCurrencyCode,
                recipientPhone: response?.recipientPhone
              }
            });
            setIsLoading(false);
            closePaymentModal();
            goGorward();
          })

          .catch(() => {
            setIsLoading(false);
            cogoToast.error("Airtime purchased failed 😩, try again", { hideAfter: 7 });
          });
      }
    };

    getOperator(operatorPayload)
      .then(response => {
        if (response?.data?.operatorId) {
          topUpPayload.operatorId = response?.data?.operatorId;
          pay(flutterWavePayload);
        }
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
          onPrefixChange={e => setFormValue("callingCode", e.target.value)}
          autoFocus={true}
          required
        />

        <div className={styles.buttonContainer}>
          <Button onClick={goBack} outline={true} type="button">
            Back
          </Button>

          <Button type="submit" isLoading={isLoading}>
            <AiFillLock />
            {`Pay ${state?.country?.currencySymbol} ${state.amount}`}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Mobile;
