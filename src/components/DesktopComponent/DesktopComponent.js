import React from "react";
import "./DesktopComponent.css";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

const DesktopComponent = () => {
  return (
    <div className="desktop">
      <div className="desktop__sidebar">
        <Sidebar />
      </div>
      <div className="desktop__main">
        <Main />
      </div>
    </div>
  );
};

export default DesktopComponent;
