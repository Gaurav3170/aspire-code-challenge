import React from "react";
import "./GenericCard.css";
import Home from "../../assets/images/Home.svg";
import VisaLogo from "../../assets/images/Visa Logo.svg";

const GenericCard = ({ data, isActiveCardFreeze }) => {
  const dotsBlock = Array.from({ length: 3 });
  const dotsArray = Array.from({ length: 4 });

  return (
    <div className={`generic__card ${isActiveCardFreeze ? 'freeze': ''}`}>
      <div className="generic__card--logo">
        <img src={Home} alt="home" className="card__logo" />
        <span className="card__logo--title">aspire</span>
      </div>
      <div className="generic__card--name">
        <span>{data.name}</span>
      </div>
      <div className="generic__card--number">
        {dotsBlock.map((dotBlock) => (
          <div className="dot__block" key={dotBlock}>
            {dotsArray.map((ind) => (
              <span className="white_dot" key={ind}>
                &nbsp;
              </span>
            ))}
          </div>
        ))}
        <div className="generic__card--number-digits">
          <span className="white_digits">{data.cardNumber.slice(-4)}</span>
        </div>
      </div>
      <div className="generic__card--expire-cvv">
        <div className="card__expiry">{`Thru: ${data.expiryDate}`}</div>
        <div className="card__cvv">
          CVV: <span className="cvv_star">***</span>
        </div>
      </div>
      <div className="generic__card--visalogo">
        <img src={VisaLogo} alt="Visa Logo" />
      </div>
    </div>
  );
};

export default GenericCard;
