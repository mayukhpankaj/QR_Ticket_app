import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "./register/utils";
import "./register/register.css"
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {theme2} from "./theme/index"
import styled from "@emotion/styled";

const formData = {
  name: "",
  query: "",
  email: ""
};

const CSSTextField = styled(TextField)({
  '& label.Mui': {
    color: '#ccc9e7',
  },
  '& .MuiInputBase-input': {
    color: "#ccc9e7",
    backgroundColor: "#2E3138"
  },
  '& .MuiFormLabel-root':{
    color: "#ccc9e7"
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc9e7',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ccc9e7',
    },
  },
})
export default function Contact() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
      if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("query" in fieldValues)
      temp.query = fieldValues.query.length
        ? ""
        : "This field is required";

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
      resetForm();
    }
  };
  return (
    <div id="contact" className="contain">
      <div className="links">
        <div className="social">
          <h2>
            Social Media
          </h2>
          <div className="link media">
          <Button>
          <IconButton>
            <a href="https://www.google.com/">
             <TwitterIcon /> 
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <InstagramIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <FacebookIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <LinkedInIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <YouTubeIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <EmailIcon />
            </a>
          </IconButton>
        </Button>
          </div>
        </div>
        <div className="quick">
          <h2>
            Quick Links
          </h2>
          <div className="link">
            <Button>
              <a>
                Sponsors
              </a>
            </Button>
            <Button>
              <a>
                Gallery
              </a>
            </Button>
            <Button>
              <a>
                Our Team
              </a>
            </Button>
            <Button>
              <a>
                Leaderboard
              </a>
            </Button>
          </div>
        </div>
        <div className="touch">
          <h2>
            Get in Touch 
          </h2>
          <div className="link">
            <Button >
              <IconButton>
                
              </IconButton>
            </Button>
          </div>  
        </div>
      </div>
      <ThemeProvider theme={theme2}>
      <div className="feedback">
        <h1>Still have doubts regarding Bitotsav????</h1>
        <p>
          Reach out to us by filling form below our team will respong to your
          query ASAP!!
        </p>
        <div className="form">
          <form onSubmit={handleSubmit} className="form-struct">
            <CSSTextField
              sx={{ mb: 2, color: "white" }}
              variant="outlined"
              label="Full Name"
              color="secondary"
              autoComplete="off"
              fontColor="white"
              id="name"
              value={values.name} 
              onChange={handleInputChange}
              {...(errors.name && {
                error: true,
                helperText: errors.name,
              })}
              required
            />
            <CSSTextField
              sx={{ mb: 2 }}
              variant="outlined"
              color="secondary"
              label="Email"
              id="email"
              autoComplete="off"
              value={values.email}
              onChange={handleInputChange}
              {...(errors.name && {
                error: true,
                helperText: errors.email,
              })}
              required
            />
            <CSSTextField
              sx={{ mb: 2 }}
              color="secondary"
              variant="outlined"
              label="Write your query here"
              id="query"
              rows={10}
              multiline
              value={values.query}
              autoComplete="off"
              onChange={handleInputChange}
              {...(errors.query && {
                error: true,
                helperText: errors.query,
              })}
              required
            />
            <Button variant="contained" color="secondary" type="submit">
              Submit your query
            </Button>
          </form>
          </div>

      </div>

      </ThemeProvider>

    </div>
  );
}
