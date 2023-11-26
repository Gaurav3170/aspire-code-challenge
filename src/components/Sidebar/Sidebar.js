import React from "react";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarList from "./SidebarList/SidebarList";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarList />
    </div>
  );
};

export default Sidebar;
