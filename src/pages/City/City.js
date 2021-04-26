import {
  AppBar,
  Container,
  makeStyles,
  Tab,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Current from "../../components/Current/Current";

const url = "https://api.weatherapi.com/v1/forecast.json?";

const useStyles = makeStyles((theme) => ({
  appbar: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
    },
    boxShadow: "none",
  },
}));

const City = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState("1");

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
    }
  };

  useEffect(() => {
    fetchCityForecast();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Container style={{ backgroundColor: "#DCDCDC" }}>
      <div>
        <Typography
          align="center"
          variant="h4"
          style={{ fontWeight: "700", paddingTop: "15px" }}
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
              <Tab label="Current" value="1" />
              <Tab label="Hourly" value="2" />
              <Tab label="3 Days" value="3" />
            </TabList>
          </AppBar>
          <TabPanel value="1">
            {city && (
              <Current current={city.current} forecast={city.forecast} />
            )}
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </div>
    </Container>
  );
};

export default City;
