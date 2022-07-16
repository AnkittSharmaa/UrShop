import React, { createContext, useContext, useReducer } from "react";

// Preapare dataLayer for use in the App.js file
export const StateContext = createContext();

// Wrap application and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//  Pull information from the Data Layer
export const useStateValue = () => useContext(StateContext);
