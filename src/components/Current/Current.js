import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context/context";
import moment from "moment";

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
  img: {
    width: "80px",
  },
  sup: {
    fontSize: "40px",
  },
  divCondition: {
    display: "flex",
    justifyContent: "center",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  divForecastCondition: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
}));

const Current = ({ current, forecast }) => {
  const { tempC } = useGlobalContext();
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
  const date = moment(last_updated).format("dddd [-] Do");

  return (
    <Grid container component="section">
      <Grid item xs={12} md={5} component="article" className={classes.article}>
        <Typography variant="body2" className={classes.headline}>
          CURRENT WEATHER
        </Typography>
        <Typography variant="body2" className={classes.headline}>
          {date}
        </Typography>
        <div id="condition" className={classes.divCondition}>
          <img src={icon} alt="condition" className={classes.img} />
          <div id="degree">
            <Typography variant="h3" className={classes.headline}>
              {tempC ? temp_c : temp_f}
              <sup>&#176;</sup>
              <sup className={classes.sup}>{tempC ? "C" : "F"}</sup>
            </Typography>
            <Typography variant="subtitle2" className={classes.headline}>
              Feels like {tempC ? feelslike_c : feelslike_f}
              <sup>&#176;</sup>
              <sup>{tempC ? "C" : "F"}</sup>
            </Typography>
          </div>
        </div>
        <div className={classes.div}>
          <Typography variant="subtitle2" className={classes.headline}>
            {text}
          </Typography>
          <Typography variant="subtitle2" className={classes.headline}>
            Humidity: {humidity}
          </Typography>
        </div>
      </Grid>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md={5} component="article" className={classes.article}>
        <Typography variant="body2" className={classes.headline}>
          TODAY'S WEATHER FORECAST
        </Typography>
        <div id="forecast-condition" className={classes.divForecastCondition}>
          <img
            src={forecastday[0].day.condition.icon}
            alt="condition"
            className={classes.img}
          />
          <div id="forecast-degree">
            <Typography variant="h3" className={classes.headline}>
              {tempC ? maxtemp_c : maxtemp_f}
              <sup>&#176;</sup>
              <sup className={classes.sup}>{tempC ? "C" : "F"}</sup>
            </Typography>
          </div>
        </div>
        <Typography align="center" gutterBottom className={classes.headline}>
          {forecastday[0].day.condition.text}
        </Typography>
        <Typography align="center" className={classes.headline}>
          Wind: {maxwind_kph} km/h
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Current;
