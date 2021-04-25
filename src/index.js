import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WeatherAppContextProvider } from "./context/context";
import theme from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <WeatherAppContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </WeatherAppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
