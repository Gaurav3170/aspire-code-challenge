import React from 'react'
import './RightVisualCardSection.css';
import CardDetails from './CardDetails/CardDetails';
import RecentTransactions from './RecentTransactions/RecentTransactions';

const RightVisualCardSection = () => {
  return (
    <div className='rightsection'>
      <div className='rightsection__carddetails'><CardDetails /></div>
      <div className='rightsection__recentTransactions'><RecentTransactions /></div>
    </div>
  )
}

export default RightVisualCardSection