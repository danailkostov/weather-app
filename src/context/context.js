import React, { useContext, useEffect, useReducer } from "react";

const WeatherAppContext = React.createContext();

const initialState = {
  suggestions: [],
  lastTowns: [],
  isSuggestionOpen: false,
  tempC: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "autocomplete":
      return { ...state, suggestions: action.payload };
    case "last_towns":
      if (state.lastTowns.length > 2) {
        const towns = state.lastTowns.slice(1);
        const updTowns = towns.concat(action.payload);
        localStorage.setItem("test1", JSON.stringify(updTowns));
        return { ...state, lastTowns: updTowns };
      }
      localStorage.setItem(
        "test1",
        JSON.stringify(state.lastTowns.concat(action.payload))
      );
      return { ...state, lastTowns: state.lastTowns.concat(action.payload) };
    case "is_suggestion_open":
      return { ...state, isSuggestionOpen: action.payload };
    case "temp":
      return { ...state, tempC: !state.tempC };
    case "local_storage":
      return { ...state, lastTowns: action.payload };
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

  const handleSuggestion = (eventType) => {
    dispatch({ type: "is_suggestion_open", payload: eventType });
  };

  const handleTemp = () => {
    dispatch({ type: "temp" });
  };

  useEffect(() => {
    if (localStorage.getItem("test1")) {
      const data = JSON.parse(localStorage.getItem("test1"));
      dispatch({ type: "local_storage", payload: data });
    }
  }, []);

  return (
    <WeatherAppContext.Provider
      value={{
        ...state,
        handleAutocomplete,
        handleTowns,
        handleSuggestion,
        handleTemp,
      }}
    >
      {children}
    </WeatherAppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(WeatherAppContext);
};

export { WeatherAppContextProvider, useGlobalContext };
