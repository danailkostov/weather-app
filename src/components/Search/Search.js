import { InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context/context";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
    margin: "50px 0px",
    marginBottom: "0px",
  },
  icon: {
    margin: "10px",
  },
}));

const Search = () => {
  let history = useHistory();
  const classes = useStyles();
  const { handleAutocomplete, handleSuggestion } = useGlobalContext();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const fetchSuggestions = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      const towns = data.slice(0, 5);
      handleAutocomplete(towns);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSuggestions(
      `https://api.weatherapi.com/v1/search.json?key=131d090c832b4956af5183243212404&q=${value}`
    );
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/city/${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder="Find Location"
        startAdornment={<SearchIcon className={classes.icon} />}
        fullWidth
        value={value}
        onChange={handleChange}
        onBlur={() => handleSuggestion(false)}
        onFocus={() => handleSuggestion(true)}
      />
    </form>
  );
};

export default Search;
