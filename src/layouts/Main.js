import React from "react";
import Nav from "../components/Nav";

function Main({ children }) {
  return (
    <main className="main_wrapper">
      <div className="wrapper">
        <h3 className="mb-4">Complete your Purchase</h3>
        <Nav />

        <div className="main-content">{children}</div>
      </div>
    </main>
  );
}

export default Main;
