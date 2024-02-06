import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./Success.css";

const Success = ({
  onCreateSuccess,
  buttonText,
  onClose,
  setModals,
  onCreateSignin,
}) => {
  return (
    <PopupWithForm
      title="Registration successfully completed!"
      onCreateSuccess={onCreateSuccess}
      buttonText={buttonText}
      onClose={onClose}
      name="success"
      setModals={setModals}
    >
      <button
        type="button"
        onClick={onCreateSignin}
        className="success__button"
      >
        Sign in
      </button>
    </PopupWithForm>
  );
};

export default Success;
