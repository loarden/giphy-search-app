import { useCallback, useEffect, useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  Gif,
  Grid,
  SearchBar,
  SuggestionBar,
  SearchContext,
} from "@giphy/react-components";

function App() {
  const { fetchGifs, searchKey } = useContext(SearchContext);

  useEffect(() => {
    console.log(searchKey)
  },[searchKey])

  return (
    <>
      <SearchBar />
      <SuggestionBar />
      {<Grid key={searchKey} fetchGifs={fetchGifs} columns={4} width={1280} />}
    </>
  );
}

export default App;
