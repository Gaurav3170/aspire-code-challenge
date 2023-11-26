import React, { useState } from "react";
import "./LeftVisualCardSection.css";
import eye from "../../../assets/images/remove_red_eye-24px.svg";
import CardCarousel from "./CardCarousel/CardCarousel";
import CardOperations from "./CardOperations/CardOperations";

const LeftVisualCardSection = ({ setCardData }) => {
  const cardsData = JSON.parse(localStorage.getItem("cardData")) || [];
  console.log({cardsData});

  const [activeCardId, setActiveCardId] = useState(cardsData[0]?.id);
  const activeCard = cardsData?.filter((data) => data.id === activeCardId);
  const isActiveCardFreeze = activeCard && activeCard.length>0 && activeCard[0]?.freeze;
  
  return (
    <div className="leftsection">
      <div className="leftsection__showcardnumber">
        <img src={eye} alt="eye-icon" className="showcardnumber__logo" />
        <span className="showcardnumber__text">Show card number</span>
      </div>
      <div className="leftsection__cardcarousel">
        <CardCarousel
          items={cardsData}
          setActiveCardId={setActiveCardId}
          isActiveCardFreeze={isActiveCardFreeze}
        />
      </div>
      <div className="leftsection__cardoperations">
        <CardOperations
          setCardData={setCardData}
          cardsData={cardsData}
          activeCardId={activeCardId}
          setActiveCardId={setActiveCardId}
          isActiveCardFreeze={isActiveCardFreeze}
        />
      </div>
    </div>
  );
};

export default LeftVisualCardSection;
