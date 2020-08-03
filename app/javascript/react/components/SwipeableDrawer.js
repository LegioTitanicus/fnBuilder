import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ChatIcon from "@material-ui/icons/Chat";
import CodeIcon from "@material-ui/icons/Code";
import ForumIcon from "@material-ui/icons/Forum"; // Collaborate?
import FunctionsIcon from "@material-ui/icons/Functions"; //Teach?

const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  //   appBar: {
  //     zIndex: theme.zIndex.drawer + 1,
  //   },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  //   toolbar: theme.mixins.toolbar,
  //   drawerPaper: {
  //     width: drawerWidth,
  //   },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const MuiDrawer = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickAway = () => {
    setMobileOpen(false);
  };

  const itemList = [
    {
      id: 1,
      text: "Teach",
      icon: <FunctionsIcon />,
    },
    {
      id: 3,
      text: "Code",
      icon: <CodeIcon />,
    },
    {
      id: 2,
      text: "Collaborate",
      icon: <ForumIcon />,
    },

    {
      id: 4,
      text: "About",
      icon: <AssignmentIcon />,
    },
  ];

  const drawer = (
    <div onClick={handleDrawerToggle}>
      <List>
        {itemList.map((page) => (
          <ListItem button key={page.id} component={Link} to={`/${page.text}`}>
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText primary={page.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton>
        <MenuIcon onClick={handleDrawerToggle} />
      </IconButton>
      <SwipeableDrawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {drawer}
      </SwipeableDrawer>
    </div>
  );
};

export default MuiDrawer;
