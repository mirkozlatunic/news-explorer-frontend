import "./Main.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";

const Main = ({ windowWidth, onSearch, onSearchKeyword }) => {
  return (
    <div className="main">
      <div className="main__section">
        <div className="main__content">
          <h1 className="main__title">What&apos;s going on in the world?</h1>
          <p className="main__para">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <div>
          <SearchForm
            windowWidth={windowWidth}
            onSearch={onSearch}
            onSearchKeyword={onSearchKeyword}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
