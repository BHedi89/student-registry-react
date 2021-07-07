import React from "react";
import classes from "./FormErrors.module.css";

export const FormErrors = ({ formErrors }) => (
  <div className={classes.formErrors}>
    <ul>
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return <li key={i}>{formErrors[fieldName]}</li>;
        } else {
          return "";
        }
      })}
    </ul>
  </div>
);

export default FormErrors;
