import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import Swal from 'sweetalert2'
import CalculateLoan from '../../components/CalculateLoan'
import LoanInformation from '../../components/LoanInformation'
import UserInformation from '../../components/UserInformation'

import "./index.scss"

function Summary() {
    const loan=JSON.parse(localStorage.getItem("loanInformation"))
    const navigate = useNavigate();
    const handleCancel=()=>{
        Swal.fire({
            title: 'Cancel Order',
            text: 'Are you sure you want to cancel your order?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it',
            cancelButtonText: 'No, keep it',
            input: 'text', 
            inputPlaceholder: 'Enter your reason',
          }).then((result) => {
            if (result.isConfirmed) {
              const reason = result.value || 'No reason provided';
              Swal.fire({
                title: 'Order Canceled',
                text: `Your order has been canceled. Reason: ${reason}`,
                icon: 'success',
              });
              navigate("/home")
            }
          });

    }
    const handleOrder=()=>{
         Swal.fire({
            title: 'Place Order',
            text: 'Are you sure you want to place your order?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, place the order',
            cancelButtonText: 'No, keep it',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Order Placed',
                text: 'Your order has been placed successfully.',
                icon: 'success',
              });
              navigate('/home')
            }
          });

    }
  return (
    <div className="summary-page">
        <h1 className="page-title">Summary</h1>
        <div className="all-information">
            <UserInformation/>
            <LoanInformation />
            <CalculateLoan display={"flex"} data={loan} />
        </div>
        <div className="buttons">
            <Button
            className="btn"
            variant="contained"
            color="error"
            size="large"
            onClick={handleCancel}
            >Cancel
            </Button>
            <Button
             color="success"
             variant="contained"
             className="btn"
             size="large"
             onClick={handleOrder}
            >Order
            </Button>
        </div>
    </div>
  )
}

export default Summary