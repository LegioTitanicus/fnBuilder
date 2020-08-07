import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Add overrides to use colors in map
  root: {
    flexGrow: 1,
  },
}));

const LanguageButtons = (props) => {
  const { language, handleLanguage } = props;
  const languagesAvailable = [
    {
      id: 1,
      language: "javascript",
      color: "#F0DB4F",
    },
    {
      id: 2,
      language: "ruby",
      color: "#9b111e",
    },
    {
      id: 4,
      language: "python",
      color: "#4b8bbe",
    },
  ];

  const buttons = languagesAvailable.map((i) => {
    return (
      <ToggleButton key={i.id} value={i.language} aria-label={i.language}>
        {i.language}
      </ToggleButton>
    );
  });

  return (
    <div>
      <ToggleButtonGroup
        value={language}
        onChange={handleLanguage}
        aria-label="language-selector"
        exclusive
      >
        {buttons}
      </ToggleButtonGroup>
    </div>
  );
};

export default LanguageButtons;

// {
//     id: 3,
//     language: "html",
//     color: "#F16529",
//   },
