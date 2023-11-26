import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, cardData, setCardData }) => {
  const initialFormData = {
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!formData.cardName.trim()) {
      validationErrors.cardName = "Card Name is required";
    }
    if (!formData.cardNumber.trim()) {
      validationErrors.cardNumber = "Card Number is required";
    }
    if (formData.cardNumber.length !== 16) {
      validationErrors.cardNumber = "Card Number length should be 16 digits";
    }
    if (!formData.expiryDate.trim()) {
      validationErrors.expiryDate = "Expiry Date is required";
    }
    if (!regex.test(formData.expiryDate)) {
      validationErrors.expiryDate = "Invalid Expiry Date format (mm/yy)";
    }
    if (!formData.cvv.trim()) {
      validationErrors.cvv = "CVV is required";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newCardData = {
        id: cardData[cardData.length - 1].id + 1,
        name: formData.cardName,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        freeze: false,
      };
      
      const updatedCards = [...cardData, newCardData];
      setCardData(updatedCards);
      setFormData(initialFormData);
      onClose();
    }
  };

  const handleClose = () => {
    setFormData(initialFormData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            Card Name
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="Name"
              autoComplete="off"
            />
            {errors.cardName && (
              <span className="error">{errors.cardName}</span>
            )}
          </label>
          <label>
            Card Number
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              maxLength={16}
              onChange={handleChange}
              placeholder="**** **** **** 1234"
              autoComplete="off"
            />
            {errors.cardNumber && (
              <span className="error">{errors.cardNumber}</span>
            )}
          </label>
          <label>
            Expiry Date
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="mm/yy"
              maxLength={5}
              autoComplete="off"
            />
            {errors.expiryDate && (
              <span className="error">{errors.expiryDate}</span>
            )}
          </label>
          <label>
            CVV
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="***"
              maxLength={3}
              autoComplete="off"
            />
            {errors.cvv && <span className="error">{errors.cvv}</span>}
          </label>
          <button className="sbt__btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
