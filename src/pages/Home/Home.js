import { Container } from "@material-ui/core";
import React from "react";
import Last from "../../components/Last/Last";
import Search from "../../components/Search/Search";
import SuggestList from "../../components/SuggestList/SuggestList";
import { useGlobalContext } from "../../context/context";

const Home = () => {
  const { isSuggestionOpen } = useGlobalContext();
  return (
    <Container
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "calc(100vh - 70px)",
      }}
    >
      <div style={{ position: "relative" }}>
        <Search />
        {isSuggestionOpen && <SuggestList />}
        <Last />
      </div>
    </Container>
  );
};

export default Home;
