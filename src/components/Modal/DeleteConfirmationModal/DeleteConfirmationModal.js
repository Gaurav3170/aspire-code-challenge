import React from 'react';
import './DeleteConfirmationModal.css'; // You need to create a CSS file for modal styles

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <>
      {isOpen && (
        <div className="delete__overlay">
          <div className="delete__modal">
            <p>Are you sure you want to delete this card?</p>
            <div className="delete__modal-buttons">
              <button onClick={onDelete}>Yes</button>
              <button onClick={onClose}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmationModal;
