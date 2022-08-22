// import "./App.css";
import { createContext, useReducer } from "react";

export const GlobalContext = createContext();
const initialState = {
  step: "Personal Info",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Personal Info":
      return {
        ...state,
        step: "Personal Info",
      };

    case "Billing Info":
      return {
        ...state,
        step: "Billing Info",
      };

    case "Confirm Payment":
      return {
        ...state,
        step: "Confirm Payment",
      };

    default:
      return state;
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
