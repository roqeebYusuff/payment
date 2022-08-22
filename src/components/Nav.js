import React, { useContext } from "react";
import { GlobalContext } from "../utils/Context";
// import { NavLink } from "react-router-dom";

function Nav() {
  const { state } = useContext(GlobalContext);
  return (
    <div>
      <div className="d-flex justify-content-between navtab">
        <div className={`nav-links  ${state.step === 'Personal Info' ? 'active-link' : ''} `} to="/">
          <span>Personal info</span>
        </div>
        <div className={`nav-links  ${state.step === 'Billing Info' ? 'active-link' : ''} `} to="/">
          <span>Billing info</span>
        </div>
        <div className={`nav-links  ${state.step === 'Confirm Payment' ? 'active-link' : ''} `} to="/">
          <span>Confirm Payment</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
