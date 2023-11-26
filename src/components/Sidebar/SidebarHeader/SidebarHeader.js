import React from "react";
import Logo from "../../../assets/images/Logo.svg";
import "./SidebarHeader.css";

const SidebarHeader = () => {
  return (
    <div className="sidebar__header">
      <div className="sidebar__logo">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="sidebar__content">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>
    </div>
  );
};

export default SidebarHeader;
