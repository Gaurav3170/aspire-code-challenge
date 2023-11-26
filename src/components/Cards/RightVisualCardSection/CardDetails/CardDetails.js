import React from 'react';
import './CardDetails.css';
import CardDetailsIcon from '../../../../assets/images/CardDetailsIcon.svg';
import downArrow from '../../../../assets/images/down-arrow.svg';

const CardDetails = () => {
  return (
    <div className='card__details'>
      <div className='card__details--icon-text'>
        <img src={CardDetailsIcon} alt="Card" className='card__details--logo'/>
        <span className='card__details--text'>Card details</span>
      </div>
      <div className='card__details--dropdown'>
        <img src={downArrow} alt="Down Arrow" className='card__details--downArrow' />
      </div>
    </div>
  )
}

export default CardDetails;