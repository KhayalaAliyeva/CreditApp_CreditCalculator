import React from 'react';
import { Link } from "react-router-dom";

// icon

// image
import Logo from "../../assets/images/logo.png"

// styles
import "./index.scss"

const Header = ({ signOut }) => {
  return (
    <div className='header'>
        <div className="container">
            <div className="navbar">
                <figure className="logo">
                    <img src={Logo} alt="logo" />
                </figure>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/new_loan">New Loan</Link>
                    </li>
                    <li>
                    <Link to="/calculator">Calculator</Link>
                    </li>
                </ul>
                <button className="right" onClick={signOut}>
                    New Register                
                </button>

            </div>
           
        </div>
    </div>
  )
}

export default Header