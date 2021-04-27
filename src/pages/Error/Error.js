import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "100px 0px",
  },
  typo: {
    fontWeight: "700",
  },
  btn: {
    backgroundColor: "black",
    color: "white",
  },
});

const Error = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.typo} gutterBottom>
        This town name doesn't exist
      </Typography>
      <Button
        variant="contained"
        className={classes.btn}
        onClick={() => history.push("/")}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default Error;
