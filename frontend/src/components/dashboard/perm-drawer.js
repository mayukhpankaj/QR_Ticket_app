import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InfoIcon from "@mui/icons-material/Info";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { NavLink , Outlet } from "react-router-dom";
import DashTempDrawer from "./dash-temp-drawer";

const drawerWidth = 400;

export default function DashboardDrawer(props) {
  return (
    <>
      {/* <CssBaseline /> */}
      <DashTempDrawer className="mobile-dash"/>
      <Drawer
        className="web-drawer"
        sx={{
            mr: 5,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <ListItem key="logo" sx={{mt:10, justifyContent: "center", alignItems: "center" }}>
                <h1>BITOTSAV</h1>
            </ListItem>
          <ListItem key="info" disablePadding sx={{width:"50%", margin: "auto"}}>
            <ListItemButton>
              <NavLink className="dashboard-link" to="/dashboard" sx={{ color: "black" }}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Your Info" />
              </NavLink >
            </ListItemButton>
          </ListItem>
          <ListItem key="pass" disablePadding sx={{width:"50%", margin: "auto"}}>
            <ListItemButton>
              <NavLink className="dashboard-link" to="/dashboard/pass">
                <ListItemIcon>
                  <QrCode2Icon />
                </ListItemIcon>
                <ListItemText primary="Your Pass" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key="event" disablePadding sx={{width:"50%", margin: "auto"}}>
            <ListItemButton>
              <NavLink className="dashboard-link" to="/dashboard/events">
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText primary="Your Events" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key="team" disablePadding sx={{width:"50%", margin: "auto"}}>
            <ListItemButton>
              <NavLink className="dashboard-link" to="/dashboard/team">
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Your Team" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key="leaderboard" disablePadding sx={{width:"50%", margin: "auto"}}>
            <ListItemButton>
              <NavLink className="dashboard-link" to="/dashboard/leaderboard">
                <ListItemIcon>
                  <LeaderboardIcon />
                </ListItemIcon>
                <ListItemText primary="Leaderboard" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key="home" disablePadding sx={{width:"50%", margin: "auto"}}>
            <ListItemButton>
              <NavLink className="dashboard-link" to="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Outlet/>
    </>
  );
}
