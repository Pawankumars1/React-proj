import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Detail from "./components/Detail";
import "./App.css";

function App() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    selected: {},
  });

  const apiurl = "https://www.omdbapi.com/?apikey=8daa7198";

  const searchInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = (e) => {
	let searchText = state.s.trim();
  
	if (searchText === "") {
	  searchText = "sherlock"; // Set the default search text
	}
  
	axios(apiurl + "&s=" + searchText).then(({ data }) => {
	  let results = data.Search;
	  setState((prevState) => {
		return { ...prevState, results: results };
	  });
	});
  };
  

  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  useEffect(() => {
    // Fetch initial movie
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search;
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Mania</h1>
      </header>
      <main>
        <Search searchInput={searchInput} search={search} />

        <Results results={state.results} openDetail={openDetail} />

        {typeof state.selected.Title !== "undefined" ? (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;