import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../logo/Logo'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <div className='navlinkbox'>
                <NavLink to='/' className='navlink navlink2'>
                    Create Employees
                </NavLink>
                <NavLink to='/list-employee' className='navlink navlink1'>
                    Current Employees
                </NavLink>
            </div>
        </div>
    )
}
export default Header