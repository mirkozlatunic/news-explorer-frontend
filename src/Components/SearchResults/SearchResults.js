//this is the component on the home page showing the results from the search

import React, { useState } from "react";
import "./SearchResults.css";
import NewsCardsList from "../NewsCardsList/NewsCardsList";

const SearchResults = ({
  cardsData,
  onLikeCard,
  loggedIn,
  searchKeyword,
  onCreateSignup,
  linksArray,
  onDeleteCard,
}) => {
  const [visibleCards, setVisibleCards] = useState(3);
  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  return (
    <div className="results">
      <h2 className="results__title">Search results</h2>
      <NewsCardsList
        cardsData={cardsData}
        visibleCards={visibleCards}
        onLikeCard={onLikeCard}
        loggedIn={loggedIn}
        searchKeyword={searchKeyword}
        onCreateSignup={onCreateSignup}
        linksArray={linksArray}
        onDeleteCard={onDeleteCard}
      />
      <div className="results__button">
        <button
          type="button"
          className={
            cardsData.length === visibleCards
              ? "results__button-text_hidden"
              : "results__button-text"
          }
          onClick={handleShowMore}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
