import { useCallback, useEffect, useState, useContext } from "react";
import {
  Grid,
  SearchBar,
  SuggestionBar,
  SearchContext,
} from "@giphy/react-components";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [modalGif, setModalGif] = useState("");

  const { fetchGifs, searchKey } = useContext(SearchContext);

  return (
    <>
      <div className="search-bar">
        <SearchBar />
        <SuggestionBar />
      </div>
      <div className="gif-wrapper">
        {!searchKey ? <h3>Trendings</h3> : <h3>{searchKey}</h3>}
        <Grid
          onGifClick={(gif, e) => {
            console.log("gif", gif);
            e.preventDefault();
            setModalGif(gif);
          }}
          key={searchKey}
          fetchGifs={fetchGifs}
          width={1280}
          columns={4}
        />
      </div>
      {modalGif && <Modal gif={modalGif} setGif={(res) => setModalGif(res)} />}
    </>
  );
}

export default App;
