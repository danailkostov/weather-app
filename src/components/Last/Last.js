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
    flexFlow: "row-reverse",
    justifyContent: "center",
  },
}));

const Last = () => {
  const classes = useStyles();
  const { lastTowns } = useGlobalContext();
  let history = useHistory();
  const handleClick = (name) => {
    history.push(`/city/${name}`);
  };
  return (
    <Grid component="section" container spacing={2} className={classes.grid}>
      {lastTowns.map(({ name, country }) => {
        return (
          <Grid item component="article" xs={12} sm={4}>
            <Paper
              variant="outlined"
              className={classes.paper}
              onClick={() => handleClick(name)}
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
