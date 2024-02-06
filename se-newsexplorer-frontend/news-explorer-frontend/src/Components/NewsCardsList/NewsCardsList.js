//this is the section that the cards will be rendered on page

import React from "react";
import "./NewsCardsList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardsList = ({
  cardsData,
  visibleCards,
  onLikeCard,
  loggedIn,
  searchKeyword,
  onDeleteCard,
  onCreateSignup,
  linksArray,
}) => {
  return (
    <ul className="cards">
      {cardsData.slice(0, visibleCards).map((card, index) => (
        <NewsCard
          key={index + 1}
          date={card.publishedAt || card.date}
          title={card.title}
          source={card.source}
          text={card.description || card.text}
          author={card.author}
          image={card.urlToImage || card.image}
          onLikeCard={onLikeCard}
          link={card.url || card.link}
          loggedIn={loggedIn}
          searchKeyword={searchKeyword || card.keyword}
          id={card._id}
          onDeleteCard={onDeleteCard}
          onCreateSignup={onCreateSignup}
          linksArray={linksArray}
        />
      ))}
    </ul>
  );
};

export default NewsCardsList;
