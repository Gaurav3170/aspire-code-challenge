import React from "react";
import "./TransactionsList.css";
import Transaction from "./Transaction/Transaction";
import { transactionListData } from "../../../../../utils/helpers";

const TransactionsList = () => {
  return (
    <div className="transactions__list">
      <div className="transactions__list--data">
        {transactionListData.map((individualTransactionData) => (
          <Transaction
            data={individualTransactionData}
            key={individualTransactionData.id}
          />
        ))}
      </div>
      <div className="transactions__list--btn">View all card transactions</div>
    </div>
  );
};

export default TransactionsList;
