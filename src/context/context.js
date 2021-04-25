import React, { useContext, useReducer } from "react";

const WeatherAppContext = React.createContext();

const initialState = {
  suggestions: [],
  lastTowns: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "autocomplete":
      return { ...state, suggestions: action.payload };
    case "last_towns":
      if (state.lastTowns.length > 2) {
        const towns = state.lastTowns.slice(1);
        const updTowns = towns.concat(action.payload);
        return { ...state, lastTowns: updTowns };
      }
      return { ...state, lastTowns: state.lastTowns.concat(action.payload) };
    default:
      return state;
  }
};

const WeatherAppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAutocomplete = (value) => {
    dispatch({ type: "autocomplete", payload: value });
  };

  const handleTowns = (name) => {
    dispatch({ type: "last_towns", payload: name });
  };

  return (
    <WeatherAppContext.Provider
      value={{ ...state, handleAutocomplete, handleTowns }}
    >
      {children}
    </WeatherAppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(WeatherAppContext);
};

export { WeatherAppContextProvider, useGlobalContext };
