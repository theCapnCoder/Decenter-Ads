import React from "react";

import styles from "./form.module.scss";
import Input from "../../components/Input";
import { Formik, FormikProps, Form as FormikForm } from "formik";

type Values = {
  firstName: string;
  lastName: string;
  workEmail: string;
  workPhone: string;
};

export const Form = () => {
  const initialValues: Values = {
    firstName: "",
    lastName: "",
    workEmail: "",
    workPhone: "",
  };

  return (
    <div className={styles.form}>
      <h1>Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {(props: FormikProps<Values>) => (
          <FormikForm className={styles.formWrapper}>
            <div className={styles.groupInputWrapper}>
              <Input name="firstName" type="text" placeholder="Frist name" />
              <Input name="lastName" type="text" placeholder="Last name" />
              <Input name="workEmail" type="email" placeholder="Work email" />
              <Input name="workPhone" type="phone" placeholder="Work Phone" />
            </div>
            <button type="submit">Send</button>
          </FormikForm>
        )}
      </Formik>
      <form className={styles.formWrapper}>
        <div className={styles.groupInputWrapper}>
          {/* <Input name="" type="text" placeholder="Frist name" />
          <Input name="" type="text" placeholder="Last name" />
          <Input name="" type="text" placeholder="Work email" />
          <Input name="" type="text" placeholder="Work Phone" /> */}
        </div>

        {/* <div className={styles.groupInputWrapper}>
          <Input placeholder="Country" />
          <Input placeholder="Company Name" />
          <Input placeholder="Business Category" />
          <Input placeholder="Select the date" />
        </div> */}

        <button type="submit">Send</button>
      </form>

    </div>
  );
};
