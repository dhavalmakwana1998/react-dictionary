import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    boxShadow: "none !important",
    minHeight: "100px !impotant",
  },
  logo: {
    margin: "auto",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="default" className={classes.appBar}>
      <img src="./images/logo192.png" className={classes.logo} alt="logo" />
      <p className="copy">&nbsp;@dhaval_makwana_26</p>
    </AppBar>
  );
}
