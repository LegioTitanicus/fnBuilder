import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

import Topnav from "./Topnav";
import SignIn from "./SignIn";
import Entry from "./Entry";
import Rate from "./Rate";

import CodeEditor from "./CodeEditor";

export const App = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  // const [loginState, setLoginState] = useState({
  //   username: "",
  //   password: "",
  // });
  // const handleChangeUsername = (event) => {
  //   setLoginState({
  //     ...loginState,
  //     [loginState.username]: event.currentTarget.value,
  //   });
  // };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#263238",
      },
      secondary: {
        main: "#18ffff",
      },
      type: darkMode ? "dark" : "light",
    },
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Topnav darkMode={darkMode} handleDarkMode={handleDarkMode} />
          <Paper variant="outlined" style={{ height: "80vh" }}>
            <Route exact path="/users/sign_in" component={SignIn} />
            <Route exact path="/entry" component={Entry} />
            <Route exact path="/rate" component={Rate} />
            <Link to={`/users/sign_in`}>sign in</Link>
            <br />
            <Link to={`/entry`}>entry</Link>
            <br />
            <Link to={`/rate`}>rate</Link>
          </Paper>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
