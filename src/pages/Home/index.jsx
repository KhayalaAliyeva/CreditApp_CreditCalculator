import React from 'react'
import UserInformation from '../../components/UserInformation'
import { Link } from 'react-router-dom';
import {Button } from '@mui/material';


import "./index.scss"

function Home() {
  return (
    <div className="home-page">
      <h2 className="page-title">User Information Table</h2>
      <UserInformation/>
      <Link to="/new_loan" >
            <Button
                variant="contained"
                color="success"
                fullWidth
                size="large"
                className="btn"
            >
                Apply new loan
            </Button>
        </Link>
    </div>
  )
}

export default Home