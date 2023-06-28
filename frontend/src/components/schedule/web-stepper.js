import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SchedTable from "./table";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function WebStepper() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: "auto",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", }}
      >
        <Tab label="Day One" {...a11yProps(0)} style={{fontSize: "50px"}}/>
        <Tab label="Day Two" {...a11yProps(1)} style={{fontSize: "50px"}}/>
        <Tab label="Day Three" {...a11yProps(2)} style={{fontSize: "50px"}}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="table">
        <SchedTable/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SchedTable/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <SchedTable/>
      </TabPanel>
    </Box>
  );
}