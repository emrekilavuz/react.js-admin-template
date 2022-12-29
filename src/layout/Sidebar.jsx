import React from 'react'
import coding_img from '../assets/coding.png';
import { Link } from 'react-router-dom';
import {FaCamera, FaChartLine, FaMoneyBill, FaRandom, FaShoppingBag, FaUser} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
        <div className="sidebar_logo_container">
            <img src={coding_img} alt="coding" />
        </div>

        <ul>
            <li>
                <Link to="/landing">
                    <FaCamera/><span className='sidebar_span'>LANDING PAGE</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaChartLine/><span className='sidebar_span'>DASHBOARD</span>
                </Link>
            </li>
            <li>
                <Link to="/landing">
                    <FaRandom/><span className='sidebar_span'>FORMS</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaUser/><span className='sidebar_span'>PROFILE</span>
                </Link>
            </li>
            <li>
                <Link to="/landing">
                    <FaShoppingBag/><span className='sidebar_span'>SALES</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaMoneyBill/><span className='sidebar_span'>CUSTOMERS</span>
                </Link>
            </li>
        </ul>
    </aside>
  )
}
