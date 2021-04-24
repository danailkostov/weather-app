import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "black",
    color: "white",
    opacity: '.7',
    padding: '10px',
    margin: '10px 0px'
  },
}));

const Last = () => {
  const classes = useStyles();
  return (
    <section>
      <Paper variant="outlined" component="article" className={classes.paper}>
        Plovdiv, Bulgaria
      </Paper>
      <Paper variant="outlined" component="article" className={classes.paper}>
        Plovdiv, Bulgaria
      </Paper>
      <Paper variant="outlined" component="article" className={classes.paper}>
        Plovdiv, Bulgaria
      </Paper>
    </section>
  );
};

export default Last;
