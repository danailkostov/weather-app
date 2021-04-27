import {
  AppBar,
  Container,
  makeStyles,
  Tab,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Current from "../../components/Current/Current";
import NextDays from "../../components/NextDays/NextDays";
import Error from "../Error/Error";

const url = "https://api.weatherapi.com/v1/forecast.json?";

const useStyles = makeStyles((theme) => ({
  appbar: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
    },
    boxShadow: "none",
  },
  div: {
    background: "rgba(220,220,220,0.3)",
    margin: "0px 0px",
  },
}));

const City = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState("1");
  let history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchCityForecast = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${url}key=131d090c832b4956af5183243212404&q=${id}&days=3&aqi=no&alerts=no`
      );
      setCity(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      history.push("/error");
    }
  };

  useEffect(() => {
    fetchCityForecast();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <div className={classes.div}>
        <Typography
          align="center"
          variant="h4"
          style={{ fontWeight: "700", paddingTop: "15px", color: "white" }}
        >
          {city
            ? city.location.country === "Bulgaria"
              ? city.location.region
              : city.location.name
            : null}
        </Typography>
        <TabContext value={value}>
          <AppBar
            position="static"
            className={classes.appbar}
            color="transparent"
          >
            <TabList onChange={handleChange}>
              <Tab
                label="Current"
                value="1"
                style={{ fontWeight: "700", color: "white" }}
              />
              {/* <Tab label="Hourly" value="2" /> */}
              <Tab
                label="3 Days"
                value="3"
                style={{ fontWeight: "700", color: "white" }}
              />
            </TabList>
          </AppBar>
          <TabPanel value="1">
            {city && (
              <Current current={city.current} forecast={city.forecast} />
            )}
          </TabPanel>
          {/* <TabPanel value="2">Item Two</TabPanel> */}
          <TabPanel value="3">
            {city && <NextDays forecast={city.forecast} />}
          </TabPanel>
        </TabContext>
      </div>
    </Container>
  );
};

export default City;
