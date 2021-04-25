import React, { useContext, useReducer } from "react";

const WeatherAppContext = React.createContext();

const initialState = {};
const reducer = (state, action) => {};

const WeatherAppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <WeatherAppContext.Provider value={{ ...state }}>
      {children}
    </WeatherAppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(WeatherAppContext);
};

export { WeatherAppContextProvider, useGlobalContext };
