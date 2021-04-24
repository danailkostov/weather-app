import { InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
    margin: '50px 0px',
    marginBottom: '5px'
  },
  icon: {
    margin: "10px",
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <InputBase
      className={classes.input}
      placeholder="Find Location"
      startAdornment={<SearchIcon className={classes.icon} />}
      fullWidth
    />
  );
};

export default Search;
