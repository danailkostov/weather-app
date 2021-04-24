import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "black",
    color: "white",
    opacity: ".7",
    padding: "10px",
  },
  grid: {
      marginTop: '5px'
  }
}));

const Last = () => {
  const classes = useStyles();
  return (
    <Grid component="section" container spacing={2} className={classes.grid}>
      <Grid item component="article" xs={12} sm={4}>
        <Paper variant="outlined" className={classes.paper}>
          Plovdiv, Bulgaria
        </Paper>
      </Grid>
      <Grid item component="article" xs={12} sm={4}>
        <Paper variant="outlined" className={classes.paper}>
          Plovdiv, Bulgaria
        </Paper>
      </Grid>
      <Grid item component="article" xs={12} sm={4}>
        <Paper variant="outlined" className={classes.paper}>
          Plovdiv, Bulgaria
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Last;
