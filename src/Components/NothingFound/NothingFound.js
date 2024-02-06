import React from "react";
import "./NothingFound.css";
import nothing from "../../Images/nothing.svg";

const NothingFound = () => {
  return (
    <div className="nothing">
      <img src={nothing} alt="nothing" />
      <p className="nothing__title">Nothing found</p>
      <p className="nothing__para">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NothingFound;
