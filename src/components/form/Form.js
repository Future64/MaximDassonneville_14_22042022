import React from 'react'
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react'
import { useParams, useLocation, useMatch, NavLink} from 'react-router-dom'
import './Form.css'

const Form = () => {
  return (
  <div className="container">
    <NavLink to="/list-employee">
      View Current Employees
    </NavLink>

    <h2>Create Employee</h2>
    <form action="#" id="create-employee">
      <div className="infoEmployee">
        <div className="containerNames">
          <div className="firstNameBox">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />
          </div>
          
          <div className="lastNameBox">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </div>
        </div>

        <div className="containerDates">
          <div className="birthdayBox">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="text" />
          </div>

          <div className="startDateBox">
            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="text" />
          </div>
        </div>
        </div>

      <fieldset className="address">
          <legend>Address</legend>

          <div className="containerCity">
            <div className="streetBox">
              <label htmlFor="street">Street</label>
              <input id="street" type="text" />
            </div>

            <div className="cityBox">
              <label htmlFor="city">City</label>
              <input id="city" type="text" />
            </div>
          </div>

          <div className="containerStateZip">
            <div className="stateBox">
              <label htmlFor="state">State</label>
              <select name="state" id="state"></select>
            </div>

            <div className="zipCodeBox">
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </div>
          </div>
      </fieldset>

      <label htmlFor="department">Department</label>
      <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
      </select>
    </form>

    <button >Save</button>
  </div>
  )
}
export default Form