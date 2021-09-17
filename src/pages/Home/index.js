import Button from "components/Button";
import TextInput from "components/TextInput";
import { Formik, Field } from "formik";
import React from "react";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <p>Home</p>

      <Formik>
        <Field>
          <TextInput name="email" type="email" />
          <Button>Submit</Button>
        </Field>
      </Formik>
    </div>
  );
};

export default Home;
