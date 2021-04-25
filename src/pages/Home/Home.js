import React from "react";
import Last from "../../components/Last/Last";
import Search from "../../components/Search/Search";
import SuggestList from "../../components/SuggestList/SuggestList";

const Home = () => {
  return (
    <>
      <Search />
      <SuggestList />
      <Last />
    </>
  );
};

export default Home;
