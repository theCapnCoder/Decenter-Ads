import React from "react";

import styles from "./form.module.scss";
import { Formik, FormikProps, Form as FormikForm } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { DropDownCircles } from "../../assets/img/DropDownCircles";

type Values = {
  firstName: string;
  lastName: string;
  workEmail: string;
  workPhone: string;
  country: string;
  companyName: string;
  businessCategory: string;
  date: string;
};

const countries = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Paraguay",
];

const businessCategorys = [
  "IT",
  "Finance",
  "Marketing",
  "Sales",
  "Engineering",
  "Legal",
];

const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too long1")
    .required("Last name is required"),
  workEmail: Yup.string().email().required("Email is required"),
  workPhone: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number. Example +123...")
    .required("Phone number is required. Example +123..."),
});

export const Form = () => {
  const initialValues: Values = {
    firstName: "",
    lastName: "",
    workEmail: "",
    workPhone: "",
    country: "",
    companyName: "",
    businessCategory: "",
    date: "",
  };

  return (
    <div className={styles.form}>
      <div className={styles.titleWrapper}>
        <h1>Join us at Cannes</h1>
        <div className={styles.circles}>
          <DropDownCircles />
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {(props: FormikProps<Values>) => (
          <FormikForm className={styles.formWrapper}>
            <div className={styles.groupInputWrapper}>
              <Input
                fullWidth
                name="firstName"
                type="text"
                placeholder="Frist name"
              />
              <Input
                fullWidth
                name="lastName"
                type="text"
                placeholder="Last name"
              />
              <Input
                fullWidth
                name="workEmail"
                type="email"
                placeholder="Work email"
              />
              <Input
                fullWidth
                name="workPhone"
                type="phone"
                placeholder="Work Phone"
              />
            </div>

            <div className={styles.groupInputWrapper}>
              <Input
                name="country"
                type="text"
                placeholder="Country"
                select
                items={countries}
                fullWidth
              />
              <Input
                name="companyName"
                type="text"
                placeholder="Company Name"
                fullWidth
              />
              <Input
                name="businessCategory"
                type="text"
                placeholder="Business Category"
                select
                items={businessCategorys}
                fullWidth
              />
              <Input
                name="date"
                type="date"
                placeholder="Select the date"
                fullWidth
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button size="medium">Send</Button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};
