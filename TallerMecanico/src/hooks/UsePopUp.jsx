import React, { createContext, useState, useContext } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const showPopUp = (content) => {
    console.log("mostrando pop-up");
    setPopupContent(content);
    setIsVisible(true);
  };

  const hidePopUp = () => {
    setIsVisible(false);
    setPopupContent(null);
  };

  return (
    <PopupContext.Provider
      value={{ isVisible, popupContent, showPopUp, hidePopUp }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  return useContext(PopupContext);
};
