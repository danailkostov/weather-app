import {
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context/context";

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: "white",
    borderTop: "1px solid red",
    paddingBottom: "0px",
    paddingTop: "0px",
    position: "absolute",
    width: "96.3%",
    zIndex: "1",
  },
}));

const SuggestList = () => {
  const { suggestions, handleTowns, handleSuggestion } = useGlobalContext();
  const classes = useStyles();
  let history = useHistory();
  const handleClick = (name, country) => {
    history.push(`/city/${name.split(",")[0]}`);
    const townObj = { name: name.split(",")[0], country: country };
    handleTowns(townObj);
    handleSuggestion(false);
  };
  return (
    <List className={classes.list}>
      {suggestions.map(({ name, country }) => {
        return (
          <>
            <ListItem button onMouseDown={() => handleClick(name, country)}>
              <ListItemText primary={name} />
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
};

export default SuggestList;
