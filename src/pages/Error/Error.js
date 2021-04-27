import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

const Error = () => {
  let history = useHistory();
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px 0px",
      }}
    >
      <Typography variant="h3" style={{ fontWeight: "700" }} gutterBottom>
        This town name doesn't exist
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: "black", color: "white" }}
        onClick={() => history.push("/")}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default Error;
