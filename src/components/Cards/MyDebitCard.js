import React from 'react'
import LeftVisualCardSection from './LeftVisualCardSection/LeftVisualCardSection';
import RightVisualCardSection from './RightVisualCardSection/RightVisualCardSection';
import './MyDebitCard.css';

const MyDebitCard = ({ setCardData }) => {
  return (
    <div className='mydebitcard'>
        <LeftVisualCardSection setCardData={setCardData} />
        <RightVisualCardSection />
    </div>
  )
}

export default MyDebitCard;