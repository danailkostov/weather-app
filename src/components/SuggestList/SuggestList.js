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
    width: "100%",
    zIndex: "1",
  },
}));

const SuggestList = () => {
  const { suggestions, handleTowns, handleSuggestion } = useGlobalContext();
  const classes = useStyles();
  let history = useHistory();
  const handleClick = (name, country, url) => {
    history.push(`/city/${url}`);
    const townObj = { name: name.split(",")[0], country: country, url: url };
    handleTowns(townObj);
    handleSuggestion(false);
  };
  return (
    <List className={classes.list}>
      {suggestions.map(({ name, country, url }) => {
        return (
          <>
            <ListItem
              button
              onMouseDown={() => handleClick(name, country, url)}
            >
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
