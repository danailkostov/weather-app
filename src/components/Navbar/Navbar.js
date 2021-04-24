import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
  },
  btn: {
    color: "white",
  },
  name: {
    color: "white",
    fontWeight: "700",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
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
        <Typography className={classes.name} variant="h5">
          Weather Forecast
        </Typography>
        <IconButton className={classes.btn}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
