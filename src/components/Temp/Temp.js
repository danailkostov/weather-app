import React from "react";
import { Typography, Grid, Switch } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";

const Temp = () => {
  const { handleTemp } = useGlobalContext();
  return (
    <Typography component="div" style={{ color: "white" }}>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item xs={3}>
          C<sup>o</sup>
        </Grid>
        <Grid item xs={6}>
          <Switch onChange={handleTemp} name="tempDegree" />
        </Grid>
        <Grid item xs={3}>
          F<sup>o</sup>
        </Grid>
      </Grid>
    </Typography>
  );
};

export default Temp;
