import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context/context";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "black",
    color: "white",
    opacity: ".7",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  grid: {
    marginTop: "5px",
  },
}));

const Last = () => {
  const classes = useStyles();
  const { lastTowns } = useGlobalContext();
  let history = useHistory();
  const handleClick = (url) => {
    history.push(`/city/${url}`);
  };
  return (
    <Grid
      component="section"
      container
      spacing={2}
      className={classes.grid}
      direction="row-reverse"
      justify="center"
    >
      {lastTowns && lastTowns.map(({ name, country, url }) => {
        return (
          <Grid item component="article" xs={12} sm={6} md={4}>
            <Paper
              variant="outlined"
              className={classes.paper}
              onClick={() => handleClick(url)}
            >
              <Typography>{name}</Typography>
              <Typography>{country}</Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Last;
