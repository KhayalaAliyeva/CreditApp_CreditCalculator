import React,{useEffect,useState} from 'react'

import './index.scss'


function calculateAmortization(loanData) {
    const { amount, percent, duration } = loanData;
    const monthlyInterestRate = (percent / 100) / 12;
    const numberOfPayments = duration;
    const monthlyPayment =
      (amount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    let balance = amount;
    const amortizationSchedule = [];
  
    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = balance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;
  
      amortizationSchedule.push({
        month,
        monthlyPayment,
        principalPayment,
        interestPayment,
        balance,
      });
    }
  
    return amortizationSchedule;
  }

function CalculateLoan({display, data}) {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
  useEffect(() => {
    const amortizationSchedule = calculateAmortization(data);
    const firstEntry = amortizationSchedule[0];
    if (firstEntry) {
      setMonthlyPayment(firstEntry.monthlyPayment);
    }
  }, [data]);
    if (display === "none") {
        return null;
      }
    // console.log(data)
    const amortizationSchedule = calculateAmortization(data);
    // Calculate column totals
  const totalMonthlyPayment = amortizationSchedule.reduce(
    (total, entry) => total + entry.monthlyPayment,
    0
  );
  const totalPrincipalPayment = amortizationSchedule.reduce(
    (total, entry) => total + entry.principalPayment,
    0
  );
  const totalInterestPayment = amortizationSchedule.reduce(
    (total, entry) => total + entry.interestPayment,
    0
  );
  const finalBalance = amortizationSchedule[amortizationSchedule.length - 1].balance;
  return (
    <div className="calculate-loan" >
        <h3 className="short-info">Loan amount: <span>{monthlyPayment.toFixed(2)}</span></h3>
        <h3 className="short-info">Monthly payment: <span>{data.amount.toFixed(2)}</span></h3>

        <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Monthly Payment</th>
            <th>Principal Payment</th>
            <th>Interest Payment</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {amortizationSchedule.map((entry) => (
            <tr key={entry.month}>
              <td>{entry.month}</td>
              <td>{entry.monthlyPayment.toFixed(2)}</td>
              <td>{entry.principalPayment.toFixed(2)}</td>
              <td>{entry.interestPayment.toFixed(2)}</td>
              <td>{entry.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalMonthlyPayment.toFixed(2)}</td>
            <td>{totalPrincipalPayment.toFixed(2)}</td>
            <td>{totalInterestPayment.toFixed(2)}</td>
            <td>{finalBalance.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}

export default CalculateLoan