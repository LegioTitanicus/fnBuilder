import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: "3vw",
    marginRight: "3vw",
  },
}));

const TranslationField = (props) => {
  const { translationField, handleChange } = props;
  const classes = useStyles();

  return (
    <div className={classes.textField}>
      <TextField
        id="outlined-multiline-flexible"
        label="Enter text here"
        multiline
        rowsMax={8}
        value={translationField}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default TranslationField;
