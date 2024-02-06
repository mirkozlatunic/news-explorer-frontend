//320 px for the menu modal
import "./MenuModal.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const MenuModal = ({
  onCreateSignin,
  isOpen,
  onClose,
  setModals,
  loggedIn,
  logout,
}) => {
  const location = useLocation();
  console.log(loggedIn);

  const onLogout = () => {
    onClose();
    logout();
  };
  return (
    <PopupWithForm name="menu" onSubmit={onCreateSignin} setModals={setModals}>
      <Header windowWidth={320} name="menu" isOpen={isOpen} onClose={onClose} />
      <div className="menu">
        {loggedIn && location.pathname === "/" ? (
          <Link to="/saved-articles" className="menu__links">
            <p className="menu__home" onClick={onClose}>
              Saved Articles
            </p>
          </Link>
        ) : (
          <Link to="/" className="menu__links">
            <p className="menu__home" onClick={onClose}>
              Home
            </p>
          </Link>
        )}
        <button
          type="button"
          className="menu__button"
          onClick={loggedIn ? onLogout : onCreateSignin}
        >
          {loggedIn ? "Sign out" : "Sign in"}
        </button>
      </div>
    </PopupWithForm>
  );
};

export default MenuModal;
