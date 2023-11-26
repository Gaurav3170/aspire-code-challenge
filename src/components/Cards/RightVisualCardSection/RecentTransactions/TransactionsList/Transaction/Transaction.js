import React from "react";
import "./Transaction.css";
import BusinessCard from "../../../../../../assets/images/businessCard.svg";
import rightArrow from '../../../../../../assets/images/rightArrow.svg';

const Transaction = ({ data }) => {

  const { id } = data;
  const transactionId = id%3;

  return (
    <div className="individual__transaction">
      <div className={`individual__transaction--left ${transactionId === 1 ? 'first__color' : (transactionId === 2 ? 'second__color': 'third__color')}`}>
        <img
          src={data.transactionIcon}
          alt={data.transactionName}
          className="transaction--left__icon"
        />
      </div>
      <div className="individual__transaction--middle">
        <div className="individual__transaction--title">
          {data.transactionName}
        </div>
        <div className="individual__transaction--date">
          {data.transactionDate}
        </div>
        <div className="individual__transaction--status">
          <div className="transaction--status__logo-boundary">
            <img
              src={BusinessCard}
              alt="Card"
              className="transaction--status__logo"
            />
          </div>
          <span className="transaction--status__text">
            {data.transactionStatus}
          </span>
        </div>
      </div>
      <div className="individual__transaction--right">
        <span className={`transaction--right__amount ${data.transactionAmount.includes('-') ? 'negative' : ''}`}>
          {data.transactionAmount}
        </span>
        <img src={rightArrow} alt="Right Arrow" className="transaction--right__logo"/>
      </div>
    </div>
  );
};

export default Transaction;
