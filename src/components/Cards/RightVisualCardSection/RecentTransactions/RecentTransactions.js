import React, { useState } from "react";
import "./RecentTransactions.css";
import BidirectionalArrow from "../../../../assets/images/BidirectionalArrow.svg";
import upArrow from "../../../../assets/images/upArrow.svg";
import downArrow from "../../../../assets/images/down-arrow.svg";
import TransactionsList from "./TransactionsList/TransactionsList";

const RecentTransactions = () => {
  const [transactionsExpand, setTransactionsExpand] = useState(true);

  const handleTransactionsToggle = () => {
    setTransactionsExpand((prevState) => !prevState);
  };

  return (
    <>
      <div className="recent__transactions">
        <div className="recent__transactions--icon-text">
          <img
            src={BidirectionalArrow}
            alt="Bi Directional Arrow"
            className="recent__transactions--logo"
          />
          <span className="recent__transactions--text">
            Recent Transactions
          </span>
        </div>
        <div
          className="recent__transactions--dropdown"
          onClick={handleTransactionsToggle}
        >
          <img
            src={transactionsExpand ? upArrow : downArrow}
            alt="Up Arrow"
            className="recent__transactions--upArrow"
          />
        </div>
      </div>
      {transactionsExpand && <TransactionsList />}
    </>
  );
};

export default RecentTransactions;
