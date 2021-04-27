import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Temp from "../Temp/Temp";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
  },
  btn: {
    color: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "700",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      component="header"
      color="transparent"
      className={classes.appbar}
    >
      <Toolbar component="nav" className={classes.toolbar}>
        <Typography variant="h5">
          <Link to="/" className={classes.link}>
            Weather Forecast
          </Link>
        </Typography>
        <Temp />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
