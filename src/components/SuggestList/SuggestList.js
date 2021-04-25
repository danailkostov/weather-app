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
  const { suggestions } = useGlobalContext();
  const classes = useStyles();
  let history = useHistory();
  const handleClick = (id) => {
    history.push(`/city/${id}`);
  };
  return (
    <List className={classes.list}>
      {suggestions.map(({ name, id }) => {
        return (
          <>
            <ListItem button onClick={() => handleClick(id)}>
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
