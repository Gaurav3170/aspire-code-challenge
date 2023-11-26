import React, { useEffect, useState } from "react";
import "./Card.css";
import box from "../../assets/images/box.svg";
import MyDebitCard from "../../components/Cards/MyDebitCard";
import AllCompanyCards from "../../components/Cards/AllCompanyCards";
import Modal from "../../components/Modal/Modal";

const Card = ({ setFormChange }) => {
  const [myDebitCardSelected, setMyDebitCardSelected] = useState(true);
  const [openNewCardModal, setOpenNewCardModal] = useState(false);
  
  const [cardData, setCardData] = useState(JSON.parse(localStorage.getItem('cardData')));

  const handleModalClose = () => {
    setOpenNewCardModal(false);
  };
  
  useEffect(() => {
    localStorage.setItem("cardData", JSON.stringify(cardData));
    setFormChange((prevState) => !prevState);
    // eslint-disable-next-line
  }, [cardData]);

  return (
    <>
      <Modal
        isOpen={openNewCardModal}
        onClose={handleModalClose}
        cardData={cardData}
        setCardData={setCardData}
      />
      <div className="card-page">
        <div className="card__header">Available balance</div>
        <div className="card__header__balance">
          <div className="balance__data">
            <button className="balance--btn">S$</button>
            <span className="balance--data">3,000</span>
          </div>
          <div className="newcard">
            <button
              className="newcard__btn"
              onClick={() => setOpenNewCardModal(true)}
            >
              <img src={box} alt="box" className="newcard__logo" />
              <span className="newcard__title">New card</span>
            </button>
          </div>
        </div>
        <div className="cardTabs">
          <button
            className={`cardTabs__mydebitcard ${
              myDebitCardSelected ? "selected" : ""
            }`}
            onClick={() => setMyDebitCardSelected(true)}
          >
            My debit cards
          </button>
          <button
            className={`cardTabs__allcompanycards ${
              !myDebitCardSelected ? "selected" : ""
            }`}
            onClick={() => setMyDebitCardSelected(false)}
          >
            All company cards
          </button>
        </div>
        {myDebitCardSelected ? <MyDebitCard setCardData={setCardData} /> : <AllCompanyCards />}
      </div>
    </>
  );
};

export default Card;
