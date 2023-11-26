import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Card from "../../pages/Card/Card";
import Payments from "./../../pages/Payments/Payments";
import Credit from "./../../pages/Credit/Credit";
import Settings from "../../pages/Settings/Settings";
import { initialCardData } from "../../utils/helpers";

const Main = () => {
  const navigate = useNavigate();
  const [formChange, setFormChange] = useState(false);

  useEffect(() => {
    navigate("/card");
    if(!localStorage.getItem('cardData')){
      localStorage.setItem("cardData", JSON.stringify(initialCardData));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    navigate('/card');
    // eslint-disable-next-line
  }, [formChange]);

  const location = useLocation();

  const renderComponent = () => {
    switch (location.pathname) {
      case "/":
        return <Home />;
      case "/card":
        return <Card setFormChange={setFormChange}/>;
      case "/payments":
        return <Payments />;
      case "/credit":
        return <Credit />;
      case "/settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default Main;
