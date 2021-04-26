import { AppBar, Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const url = "https://api.weatherapi.com/v1/forecast.json?";

const City = () => {
  const { id } = useParams();
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    <Container>
    <AppBar position='static'>

      <div style={{ color: "white" }}>City Page</div>
    </AppBar>
    </Container>
  );
};

export default City;

// https://api.weatherapi.com/v1/forecast.json?key=131d090c832b4956af5183243212404&q=plovdiv&days=1&aqi=yes&alerts=no
