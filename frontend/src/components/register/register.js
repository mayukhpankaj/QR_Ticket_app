import * as React from "react";
import UserSignup from "./user-signup";
import "./register.css";
import TeamRegister from "./team-register";
import UserLogin from "./user-login";
import TeamLogin from "./team-login";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Register() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id="register" className="contain">
      <Box className="box">
        <Box sx={{ borderBottom: 1, borderColor: "divider", bgColor: "background.paper" }} >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            allowScrollButtonsMobile
            scrollButtons="auto"
          >
            <Tab label="User Registration" {...a11yProps(0)} />
            <Tab label="Team Registration" {...a11yProps(1)} />
            <Tab label="User Login" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <UserSignup />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TeamRegister />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <UserLogin />
        </TabPanel>
      </Box>
    </div>
  );
}
