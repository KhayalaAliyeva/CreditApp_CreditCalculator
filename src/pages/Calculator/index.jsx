import React from 'react'
import LoanInfo from '../../components/LoanInfo'
// style
import './index.scss'
function Calculator() {
  return (
    <div className="calculator-page">
      <div className="head-section">
        <h1 className="title"> Calculator</h1>
        <p className='info'>You can get acquainted with the payment plan (annuity - in equal parts every month) depending on the amount of the loan and the payment period by choosing the annual interest rate of the loan or the type of loan using the loan calculator:</p>
        
      </div>
        <LoanInfo/>
    </div>
  )
}

export default Calculator