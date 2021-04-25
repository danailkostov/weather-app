import React, { useContext, useReducer } from "react";

const WeatherAppContext = React.createContext();

const initialState = {
  suggestions: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "autocomplete":
      return { ...state, suggestions: action.payload };
    default:
      return state;
  }
};

const WeatherAppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAutocomplete = (value) => {
    dispatch({ type: "autocomplete", payload: value });
  };

  return (
    <WeatherAppContext.Provider value={{ ...state, handleAutocomplete }}>
      {children}
    </WeatherAppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(WeatherAppContext);
};

export { WeatherAppContextProvider, useGlobalContext };
