import React from 'react'
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react'
import { useParams, useLocation, useMatch, NavLink} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className='logo'>
            <span className="H">H</span>
            <span className="R">R</span>
            <span className="net">net</span>
        </div>  
          <div className="navlinkbox">
            <NavLink to="/list-employee" className="navlink navlink1">
              Current Employees
            </NavLink>
            <NavLink to="/" className="navlink navlink2">
              Create Employees
            </NavLink>
          </div>
    </div>
  )
}
export default Header