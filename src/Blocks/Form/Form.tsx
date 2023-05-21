import React from "react";

import styles from "./form.module.scss";
import Input from "../../components/Input";

export const Form = () => {
  return (
    <div className={styles.form}>
      <Input placeholder="Frist name" />
      <input type="text" />
      <h1>Form</h1>

      <form className={styles.formWrapper}>
        <div className={styles.groupInputWrapper}>
          <Input placeholder="Frist name" />
          <Input placeholder="Last name" />
          <Input placeholder="Work email" />
          <Input placeholder="Work Phone" />
        </div>

        <div className={styles.groupInputWrapper}>
          <Input placeholder="Country" />
          <Input placeholder="Company Name" />
          <Input placeholder="Business Category" />
          <Input placeholder="Select the date" />
        </div>

        <button type="submit">Send</button>
      </form>

      <div>
        <input type="text" autoComplete="hello" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
};
