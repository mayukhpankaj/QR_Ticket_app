import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EventCard from "./event-card";
import "./event.css"
import { Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const eve = [
  {
    title: "event title",
    discription: ` discription The filter property is specified as none or one or more of the functions listed below. If the parameter for any function is invalid, the function returns none. Except where noted, the functions that take a value expressed with a percent sign (as in 34%) also accept the value expressed as decimal (as in 0.34).

 When a filter property has two or more functions, its results are different from the same functions applied separately using multiple filter properties.The filter property is specified as none or one or more of the functions listed below. If the parameter for any function is invalid, the function returns none. Except where noted, the functions that take a value expressed with a percent sign (as in 34%) also accept the value expressed as decimal (as in 0.34).

    When a filter property has two or more functions, its results are different from the same functions applied separately using multiple filter properties.The filter property is specified as none or one or more of the functions listed below. If the parameter for any function is invalid, the function returns none. Except where noted, the functions that take a value expressed with a percent sign (as in 34%) also accept the value expressed as decimal (as in 0.34).

    When a filter property has two or more functions, its results are different from the same functions applied separately using multiple filter properties.The filter property is specified as none or one or more of the functions listed below. If the parameter for any function is invalid, the function returns none. Except where noted, the functions that take a value expressed with a percent sign (as in 34%) also accept the value expressed as decimal (as in 0.34).

    When a filter property has two or more functions, its results are different from the same functions applied separately using multiple filter properties.The filter property is specified as none or one or more of the functions listed below. If the parameter for any function is invalid, the function returns none. Except where noted, the functions that take a value expressed with a percent sign (as in 34%) also accept the value expressed as decimal (as in 0.34).

    When a filter property has two or more functions, its results are different from the same functions applied separately using multiple filter properties.The filter property is specified as none or one or more of the functions listed below. If the parameter for any function is invalid, the function returns none. Except where noted, the functions that take a value expressed with a percent sign (as in 34%) also accept the value expressed as decimal (as in 0.34).

    When a filter property has two or more functions, its results are different from the same functions applied separately using multiple filter properties."`,
    time: "18:00",
    place: "CAT HALL" 
  }
]
let cou=0;
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

export default function WebTab() {
  const [value, setValue] = React.useState(0);
  const [click,setClick]=React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const inputRef=React.useRef(null)
  let childrens=[]
  React.useEffect(()=>{
    childrens=[...inputRef.current.children]
    childrens.forEach((element,index)=>{
      element.style.transform=`translateX(${click*100}%)`
    })
    // console.log(childrens.length-2);
    // console.log("click",click)
    // console.log(click>(childrens.length-2));
  },[click])
  const handleLeftButtonClick=()=>{
    setClick((el)=>el-1)
  }
  const handleRightButtonClick=()=>{
    setClick((el)=>el+1)
  }
  return (
    <Box className="webtab">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          allowScrollButtonsMobile
          centered={true}
        >
          <Tab label="Flagship" {...a11yProps(0)} />
          <Tab label="Informal" {...a11yProps(1)} />
          <Tab label="Formal" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="carousel_container" ref={inputRef}>
     {[1,2,3,4,5,6,7,8,9].map((el,i)=>{ cou=i; return(<EventCard detail={eve[0]} />)})}
       </div>
       <div className="carousel_button">
       <Button disabled={click===0}>
        <IconButton onClick={handleRightButtonClick} >
          <ArrowBackIosIcon/>
        </IconButton>
       </Button>

       <Button disabled={Math.abs(click)>cou-1} onClick={handleLeftButtonClick}>
        <IconButton>
          <ArrowForwardIosIcon/>
        </IconButton>
       </Button>
       </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </Box>
  );
}
