import React from "react";
import Result from "./Result";

function Results({ results, openDetail }) {
  const hasResults = results && results.length > 0;

  return (
    <section className="results">
      {hasResults ? (
        results.map((result) => (
          <Result key={result.imdbID} result={result} openDetail={openDetail} />
        ))
      ) : (
        <div className="not-found">
          <h2>No results found.</h2>
          <h2>Try checking the name you input or search for another movie.</h2>
        </div>
      )}
    </section>
  );
}

export default Results;
