import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, SearchBar } from "@giphy/react-components";

const giphyFetch = new GiphyFetch("wphvpzgvQnbIL94cwQbjFrb16u4pNlg0");

function App() {
  const [gif, setGif] = useState("f");

  const searchGiphy = useCallback((offset) => giphyFetch.search(gif, { offset, limit: 20 }),[gif]);

  const trendighGiphy = (offset) =>
    giphyFetch.trending(gif, { offset, limit: 20 });

  return (
    <>
    <input type="text" value={gif} onChange={(e) => setGif(e.target.value)} />
    {
      gif ? <Grid key={gif} fetchGifs={searchGiphy} columns={6} width={800}/> : <Grid fetchGifs={trendighGiphy} columns={6} width={800} />
    }
    </>
  );
}

export default App;
