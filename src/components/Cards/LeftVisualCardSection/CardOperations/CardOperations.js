import React, { useState } from "react";
import "./CardOperations.css";
import FreezeCardLogo from "../../../../assets/images/Freeze card.svg";
import SpendLimit from "../../../../assets/images/Set spend limit.svg";
import Gpay from "../../../../assets/images/GPay.svg";
import Replace from "../../../../assets/images/Replace card.svg";
import Cancel from "../../../../assets/images/Deactivate card.svg";
import DeleteConfirmationModal from "../../../Modal/DeleteConfirmationModal/DeleteConfirmationModal";

const CardOperations = ({ cardsData, setCardData, activeCardId, isActiveCardFreeze, setActiveCardId }) => {
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleFreezeCard = () => {
    const newCardsData = cardsData?.map((data) => {
      if (data?.id === activeCardId) {
        return { ...data, freeze: !data.freeze };
      } else {
        return data;
      }
    });

    setCardData(newCardsData);
  };

  const handleSpendLimit = () => {
    console.log("handleSpendLimit Clicked");
  };
  const handleAddToGPAY = () => {
    console.log("handleAddToGPAY Clicked");
  };
  const handleReplaceCard = () => {
    console.log("handleReplaceCard Clicked");
  };

  const handleCancelCard = () => {
    const newCardData = cardsData?.filter((data) => data?.id !== activeCardId);
    setCardData(newCardData);
    if(newCardData)
      setActiveCardId(newCardData[0]?.id);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="card__operations">
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleCancelCard}
      />
      <div className="card__operations--actions">
        <div className="individual__action" onClick={handleFreezeCard}>
          <img
            src={FreezeCardLogo}
            alt="Freeze Card"
            className="individual__action--logo"
          />
          <div className="individual__action--title">{isActiveCardFreeze ? 'Unfreeze Card': 'Freeze Card'}</div>
        </div>

        <div className="individual__action" onClick={handleSpendLimit}>
          <img
            src={SpendLimit}
            alt="Set spend Limit"
            className="individual__action--logo"
          />
          <div className="individual__action--title">Set spend Limit</div>
        </div>
        <div className="individual__action" onClick={handleAddToGPAY}>
          <img
            src={Gpay}
            alt="Add to GPay"
            className="individual__action--logo"
          />
          <div className="individual__action--title">Add to GPay</div>
        </div>
        <div className="individual__action" onClick={handleReplaceCard}>
          <img
            src={Replace}
            alt="Replace Card"
            className="individual__action--logo"
          />
          <div className="individual__action--title">Replace Card</div>
        </div>
        <div className="individual__action" onClick={() => setIsDeleteModalOpen(true)}>
          <img
            src={Cancel}
            alt="Cancel Card"
            className="individual__action--logo"
          />
          <div className="individual__action--title">Cancel Card</div>
        </div>
      </div>
    </div>
  );
};

export default CardOperations;
