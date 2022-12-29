import React from 'react'
import main_logo from '../assets/calendar.png';

export default function Header() {
  return (
    <nav className='topNav'>
        <div className="header_logo_container">
            <img src={main_logo} alt="notebook" />
        </div>

        <div className="headerUl">
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Pricing</li>
            </ul>
        </div>

        <div className="headerButtonsContainer">
            <button className="btn">Sign Up</button>
            <button className="btn">Login</button>
        </div>
    </nav>
  )
}
