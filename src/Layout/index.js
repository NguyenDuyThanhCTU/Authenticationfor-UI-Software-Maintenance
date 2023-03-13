import React from "react";
import HomePage from "./Home/Home";
function DefalutLayout({ children }) {
  return (
    <div>
      <HomePage />
      <div className="">{children}</div>
    </div>
  );
}

export default DefalutLayout;
