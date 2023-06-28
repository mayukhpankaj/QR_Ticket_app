import { Button, TextField } from "@mui/material";
import { useForm } from "./utils";
import React from "react";

const formData = {
  bitotsavID: "",
  password: "",
};

export default function UserLogin() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("bitotsavID" in fieldValues)
      temp.bitotsavID = fieldValues.bitotsavID ? "" : "This field is required.";
    if ("password" in fieldValues)
      temp.password = fieldValues.password.length
        ? ""
        : "This field is required";

    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(formData, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(errors);
    if (validate()) {
      console.log(values);
      resetForm();
    }
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit} className="form-struct">
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Bitotsav ID"
            id="bitotsavID"
            autoComplete="off"
            value={values.bitotsavID}
            onChange={handleInputChange}
            {...(errors.bitotsavID && {
              error: true,
              helperText: errors.bitotsavID,
            })}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Password"
            id="password"
            autoComplete="off"
            type="password"
            value={values.password}
            onChange={handleInputChange}
            {...(errors.password && {
              error: true,
              helperText: errors.password,
            })}
            required
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
