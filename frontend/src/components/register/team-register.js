import { AlertTitle, Button, TextField } from "@mui/material";
import { useForm } from "./utils";
import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const formData = {
  teamname: "",
  id_1: "",
  id_2: "",
  id_3: "",
  id_4: "",
  id_5: "",
};

const vertical = "top"
const horizontal = "center"
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TeamRegister() {
  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("teamname" in fieldValues)
      temp.teamname = fieldValues.teamname ? "" : "This field is required.";
    if ("id_1" in fieldValues){
    const isEmail = /$^|.+@.+..+/.test(fieldValues.id_1)
    const isFill = fieldValues.id_1?true:false
    if (!isEmail){
      temp.id_1="Not a valid email"
    } else if (!isFill){
      temp.id_1="This field is required"
    } else{
      temp.id_1=""
    }}
    if ("id_2" in fieldValues){
    const isEmail = /$^|.+@.+..+/.test(fieldValues.id_2)
    const isFill = fieldValues.id_2?true:false
    if (!isEmail){
      temp.id_2="Not a valid email"
    } else if (!isFill){
      temp.id_2="This field is required"
    } else{
      temp.id_2=""
    }}
    if ("id_3" in fieldValues){
    const isEmail = /$^|.+@.+..+/.test(fieldValues.id_3)
    const isFill = fieldValues.id_3?true:false
    if (!isEmail){
      temp.id_3="Not a valid email"
    } else if (!isFill){
      temp.id_3="This field is required"
    } else{
      temp.id_3=""
    }}
    if ("id_4" in fieldValues){
      temp.id_4 = /$^|.+@.+..+/.test(fieldValues.id_4)?"":"Not a valid email"
    }
    if ("id_5" in fieldValues){
      temp.id_5 = /$^|.+@.+..+/.test(fieldValues.id_5)?"":"Not a valid email"
    }
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(formData, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(errors);
    if (validate()) {
      console.log(values);
      setOpen(true)
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
            label="Team Name"
            id="teamname"
            value={values.teamname}
            onChange={handleInputChange}
            {...(errors.teamname && {
              error: true,
              helperText: errors.teamname,
            })}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Team Leader's id"
            autoComplete="off"
            type="email"
            id="id_1"
            value={values.id_1}
            onChange={handleInputChange}
            {...(errors.id_1 && { error: true, helperText: errors.id_1 })}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Member's id"
            type="email"
            autoComplete="off"
            id="id_2"
            value={values.id_2}
            onChange={handleInputChange}
            {...(errors.id_2 && { error: true, helperText: errors.id_2 })}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Member's id"
            type="email"
            id="id_3"
            autoComplete="off"
            value={values.id_3}
            onChange={handleInputChange}
            {...(errors.id_3 && { error: true, helperText: errors.id_3 })}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Member's id (optional)"
            type="email"
            id="id_4"
            autoComplete="off"
            value={values.id_4}
            onChange={handleInputChange}
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Member's id (optional)"
            id="id_5"
            type="email"
            autoComplete="off"
            value={values.id_5}
            onChange={handleInputChange}
          />
          <Button variant="contained" type="submit">
            Register
          </Button>
          <Snackbar anchorOrigin={{vertical, horizontal}} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              <AlertTitle></AlertTitle>
              You can now register for events
            </Alert>
          </Snackbar>
        </form>
      </div>
    </>
  );
}
