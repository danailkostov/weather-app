import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context/context";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
}));

const NextDays = ({ forecast }) => {
  const classes = useStyles();
  const { tempC } = useGlobalContext();
  const { forecastday } = forecast;
  return (
    <Grid container spacing={2}>
      {forecastday.map(
        ({
          date,
          day: {
            mintemp_c,
            mintemp_f,
            avgtemp_c,
            avgtemp_f,
            maxtemp_c,
            maxtemp_f,
            condition,
            avghumidity,
            maxwind_kph,
          },
        }) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <Paper style={{ padding: "15px" }}>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h4"
                  style={{ fontWeight: "700" }}
                >
                  {moment(date).format("ddd [-] Do")}
                </Typography>
                <div className={classes.div}>
                  <Typography style={{ fontWeight: "700" }}>
                    Min: {tempC ? mintemp_c : mintemp_f}
                    <sup>&#176;</sup>
                    <sup>{tempC ? "C" : "F"}</sup>
                  </Typography>
                  <Typography style={{ fontWeight: "700" }}>
                    Avg: {tempC ? avgtemp_c : avgtemp_f}
                    <sup>&#176;</sup>
                    <sup>{tempC ? "C" : "F"}</sup>
                  </Typography>
                  <Typography style={{ fontWeight: "700" }}>
                    Max: {tempC ? maxtemp_c : maxtemp_f}
                    <sup>&#176;</sup>
                    <sup>{tempC ? "C" : "F"}</sup>
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "5px",
                    alignItems: "center",
                  }}
                >
                  <img src={condition.icon} alt="condition" />
                  <Typography style={{ fontWeight: "700" }}>
                    {condition.text}
                  </Typography>
                </div>
                <div className={classes.div}>
                  <Typography style={{ fontWeight: "700" }}>
                    Humidity: {avghumidity}%{" "}
                  </Typography>
                  <Typography style={{ fontWeight: "700" }}>
                    Wind: {maxwind_kph} km/h{" "}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          );
        }
      )}
    </Grid>
  );
};

export default NextDays;
