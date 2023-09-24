import React from 'react'
import RegistrationForm from '../../components/RegistrationForm'

import './index.scss'
function Register({authenticate}) {
  return (
    <div className="register-page">
        <h2 className="title">Register</h2>
        <RegistrationForm authenticate={authenticate}/>
    </div>
  )
}

export default Register