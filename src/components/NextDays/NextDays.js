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
  headline: {
    fontWeight: "700",
  },
  paper: {
    padding: "15px",
  },
  divCondition: {
    display: "flex",
    justifyContent: "center",
    margin: "5px",
    alignItems: "center",
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
              <Paper className={classes.paper}>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h4"
                  className={classes.headline}
                >
                  {moment(date).format("ddd [-] Do")}
                </Typography>
                <div className={classes.div}>
                  <Typography className={classes.headline}>
                    Min: {tempC ? mintemp_c : mintemp_f}
                    <sup>&#176;</sup>
                    <sup>{tempC ? "C" : "F"}</sup>
                  </Typography>
                  <Typography className={classes.headline}>
                    Avg: {tempC ? avgtemp_c : avgtemp_f}
                    <sup>&#176;</sup>
                    <sup>{tempC ? "C" : "F"}</sup>
                  </Typography>
                  <Typography className={classes.headline}>
                    Max: {tempC ? maxtemp_c : maxtemp_f}
                    <sup>&#176;</sup>
                    <sup>{tempC ? "C" : "F"}</sup>
                  </Typography>
                </div>
                <div className={classes.divCondition}>
                  <img src={condition.icon} alt="condition" />
                  <Typography className={classes.headline}>
                    {condition.text}
                  </Typography>
                </div>
                <div className={classes.div}>
                  <Typography className={classes.headline}>
                    Humidity: {avghumidity}%{" "}
                  </Typography>
                  <Typography className={classes.headline}>
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
