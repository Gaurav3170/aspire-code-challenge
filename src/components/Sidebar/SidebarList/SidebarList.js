import React from "react";
import "./SidebarList.css";
import sidebarIconsList from "./../../../utils/sidebarIconsList";
import { useNavigate } from 'react-router-dom';

const SidebarList = () => {
  
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <div className="sidebar__list">
      <div className="sidebar__list--btn">
        {sidebarIconsList.map((buttonData) => (
          <button className={`sidebarBtn ${buttonData.title.toLowerCase()}`} onClick={() => handleRoute(buttonData.route)} key={buttonData.title}>
            <img className='sidebarBtnImg' src={buttonData.icon} alt={buttonData.title} />
            <span
              className={`btn--title ${buttonData.title.toLowerCase()} ${
                buttonData.title === "Card" && "btn--active"
              }`}
            >
              {buttonData.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarList;
