import React, { useState, cloneElement } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Switch,
  Button,
  useScrollTrigger,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";

import Brightness2Icon from "@material-ui/icons/Brightness2";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";

import MuiDrawer from "./SwipeableDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    marginLeft: "auto",
  },
  title: {
    flexGrow: 1,
  },
}));

const Topnav = (props) => {
  const { handleDarkMode, darkMode } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const classes = useStyles();

  //   const isBig = useMediaQuery(theme.breakpoints.up("md"));  // will require I make a separate theme file so it can recognize breakpoints instead of the way I have it now in app.js

  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const handleDrawerToggle = () => {
    console.log("toggle menu");
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <MuiDrawer className={classes.menuButton} />
            <Typography variant="h6" className={classes.title}>
              {" "}
              FnBuilder
            </Typography>
            {darkMode ? <Brightness2Icon /> : <BrightnessMediumIcon />}
            <Switch
              checked={darkMode}
              onChange={handleDarkMode}
              color="secondary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Topnav;
