import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  article: {
    backgroundColor: "white",
    borderRadius: "2px",
    padding: "15px",
    marginBottom: "15px",
    minHeight: "200px",
  },
  headline: {
    fontWeight: "700",
  },
}));

const Current = ({ current, forecast }) => {
  const {
    last_updated,
    condition: { icon, text },
    temp_c,
    temp_f,
    feelslike_c,
    feelslike_f,
    humidity,
  } = current;
  const { forecastday } = forecast;
  const {
    day: { maxtemp_c, maxtemp_f, maxwind_kph },
  } = forecastday[0];
  const classes = useStyles();
  return (
    <Grid container component="section">
      <Grid item xs={12} md={5} component="article" className={classes.article}>
        <Typography variant="body2" className={classes.headline}>
          CURRENT WEATHER
        </Typography>
        <Typography variant="body2" style={{ fontWeight: "700" }}>
          {last_updated}
        </Typography>
        <div
          id="condition"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={icon} alt="condition" style={{ width: "80px" }} />
          <div id="degree">
            <Typography variant="h3" className={classes.headline}>
              {temp_c}
              <sup style={{ fontSize: "40px" }}>c</sup>
            </Typography>
            <Typography variant="subtitle2" style={{ fontWeight: "700" }}>
              Feels like {feelslike_c}
              <sup>c</sup>
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="subtitle2" style={{ fontWeight: "700" }}>
            {text}
          </Typography>
          <Typography variant="subtitle2" style={{ fontWeight: "700" }}>
            Humidity: {humidity}
          </Typography>
        </div>
      </Grid>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md={5} component="article" className={classes.article}>
        <Typography variant="body2" className={classes.headline}>
          TODAY'S WEATHER FORECAST
        </Typography>
        <div
          id="forecast-condition"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <img
            src={forecastday[0].day.condition.icon}
            alt="condition"
            style={{ width: "80px" }}
          />
          <div id="forecast-degree">
            <Typography variant="h3" className={classes.headline}>
              {maxtemp_c}
              <sup style={{ fontSize: "40px" }}>c</sup>
            </Typography>
          </div>
        </div>
        <Typography align="center" gutterBottom style={{ fontWeight: "700" }}>
          {forecastday[0].day.condition.text}
        </Typography>
        <Typography align="center" style={{ fontWeight: "700" }}>
          Wind: {maxwind_kph} km/h
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Current;
