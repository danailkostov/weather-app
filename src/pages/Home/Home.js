import React from "react";
import Last from "../../components/Last/Last";
import Search from "../../components/Search/Search";
import SuggestList from "../../components/SuggestList/SuggestList";
import { useGlobalContext } from "../../context/context";

const Home = () => {
  const { isSuggestionOpen } = useGlobalContext();
  return (
    <>
      <Search />
      {isSuggestionOpen && <SuggestList />}
      <Last />
    </>
  );
};

export default Home;
