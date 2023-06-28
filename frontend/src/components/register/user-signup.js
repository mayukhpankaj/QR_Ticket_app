import { Button, TextField } from "@mui/material";
import { useForm } from "./utils";
import React from "react";

const formData = {
  fullname: "",
  collegename: "",
  email: "",
  password: "",
  conpass: "",
};
let p=""
export default function UserSignup() {
  const [stateOTP, setStateOTP] = React.useState({
    value: "",
    state: false,
  });

  //console.log(stateOTP)
  const triggerOTP = () => {
    setStateOTP((prev) => {
      return {
        ...prev,
        state: !prev.state,
      };
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStateOTP((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const validateOTPInput = (val) => {
    let isNum = /^\d+$/.test(val);
    let isSix = val.length === 4;

    let error = false;
    let msg = "";
    if (!isNum) {
      msg = "OTP should be a number";
      error = true;
    } else if (!isSix) {
      msg = "OTP should be a four digit long";
      error = true;
    }
    return { error, msg };
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullname" in fieldValues)
      temp.fullname = fieldValues.fullname ? "" : "This field is required.";
    if ("email" in fieldValues){
      const isEmail = /$^|.+@.+..+/.test(fieldValues.email)
      const isFill = fieldValues.email?true:false
      if (!isEmail){
        temp.email="Not a valid email"
      } else if (!isFill){
        temp.email="This field is required"
      } else{
        temp.email=""
      }
    }
    if ("collegename" in fieldValues)
      temp.collegename = fieldValues.collegename.length
        ? ""
        : "This field is required";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length >= 8
          ? ""
          : "Password should have atleast 8 characters";
    p=values.password
    if ("conpass" in fieldValues)
      temp.conpass =
        fieldValues.conpass === p
          ? ""
          : "Password and Confirm Password should be same";
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
            label="Full Name"
            id="fullname"
            value={values.fullname}
            onChange={handleInputChange}
            autoComplete="off"
            {...(errors.fullname && {
              error: true,
              helperText: errors.fullname,
            })}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="College Name"
            id="collegename"
            value={values.collegename}
            autoComplete="off"
            onChange={handleInputChange}
            {...(errors.collegename && {
              error: true,
              helperText: errors.collegename,
            })}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Email"
            id="email"
            autoComplete="off"
            value={values.email}
            onChange={handleInputChange}
            {...(errors.email && { error: true, helperText: errors.email })}
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
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Confirm Password"
            id="conpass"
            autoComplete="off"
            value={values.conpass}
            onChange={handleInputChange}
            {...(errors.conpass && { error: true, helperText: errors.conpass })}
            required
          />
          <Button variant="contained" onClick={triggerOTP} type="submit" sx={{ mb: 2 }}>
            Generate OTP
          </Button>
        </form>
        <form className="form-struct">
        <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Enter OTP"
            id="value"
            value={stateOTP.value}
            autoComplete="off"
            disabled={!stateOTP.state}
            onChange={handleChange}
            required
            {...(validateOTPInput(stateOTP.value).error && {
              error: stateOTP.state?true:false,
              helperText: !stateOTP.state?"":validateOTPInput(stateOTP.value).msg,
            })}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={!stateOTP.state}
            sx={{ mb: 2 }}
          >
            Register
          </Button>
        </form>
      </div>
    </>
  );
}
