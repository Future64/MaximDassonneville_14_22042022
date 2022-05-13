import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayModal, setArrayEmployee } from '../../redux/reducer'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import InputBox from '../inputBox/InputBox'
import states from '../../utils/states'

const Form = () => {
  const firstNameInput = document.querySelector('#firstName')
  const lastNameInput = document.querySelector('#lastName')
  const streetInput = document.querySelector('#street')
  const cityInput = document.querySelector('#city')
  const zipCodeInput = document.querySelector('#zipCode')
  const inputClass = document.querySelectorAll('.input')

  const dispatch = useDispatch()
  const arrayEmployee = useSelector(state => {
    return state
  })
  const navigate = useNavigate()
  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [error, setError] = useState(false)
  const [borderInput, setBorderInput] = useState('display')
  const [messageError, setMessageError] = useState('')
  const [data, setData] = useState([])
  const [userInputs, setUserInputs] = useState({
    firstName: '',
    lastName: '',
    dateBirth: birthDate.toLocaleDateString('en-US'),
    startDate: startDate.toLocaleDateString('en-US'),
    street: '',
    city: '',
    state: 'Alabama',
    zipCode: '',
    departement: 'Sales',
  })

  function handleInputChange(event) {
    const inputName = event.target.id
    setUserInputs({ ...userInputs, [inputName]: event.target.value })
    if (
      firstNameInput.value.length == 0 &&
      lastNameInput.value.length == 0 &&
      streetInput.value.length == 0 &&
      cityInput.value.length == 0 &&
      zipCodeInput.value.length == 0
    ) {
      setError(false)
    } else {
      setError(true)
    }
  }

  function refreshForm() {
    firstNameInput.value = ''
    lastNameInput.value = ''
    streetInput.value = ''
    cityInput.value = ''
    zipCodeInput.value = ''
    setBirthDate(new Date())
    setStartDate(new Date())
  }

  function handleDateBirthValue(e) {
    setUserInputs({
      ...userInputs,
      ['dateOfBirth']: e.toLocaleDateString('en-US'),
    })
  }

  function handleStartDateValue(e) {
    setUserInputs({
      ...userInputs,
      ['startDate']: e.toLocaleDateString('en-US'),
    })
  }

  function navigateTo() {
    navigate('/list-employee')
  }

  function saveSubmit(e) {
    e.preventDefault()

    if (error === true) {
      dispatch(setDisplayModal(true))
      const newData = [...data, userInputs]
      if (arrayEmployee.employee.arrayEmployee.length === 0) {
        dispatch(setArrayEmployee(newData))
        setData(newData)
      } else {
        const dataUpdate = [...arrayEmployee.employee.arrayEmployee, userInputs]
        setData(dataUpdate)
        dispatch(setArrayEmployee(dataUpdate))
      }
      refreshForm()
      setMessageError('')
      // navigateTo()
    }
    setMessageError('You must fill all the fields!')
  }

  // console.log('In userInputs:', userInputs)
  console.log(error)
  console.log(firstNameInput)
  console.log("In state's redux:", arrayEmployee.employee.arrayEmployee)
  return (
    <div className="container">
      <form
        id="create-employee"
        onSubmit={e => {
          saveSubmit(e)
        }}>
        <div className="infoEmployee">
          <div className="containerNames">
            <InputBox
              id="firstName"
              className="firstNameBox input"
              onChange={handleInputChange}
              type="text"
              content="First Name"
            />

            <InputBox
              id="lastName"
              className="lastNameBox input"
              onChange={handleInputChange}
              type="text"
              content="Last Name"
            />
          </div>

          <div className="containerDates">
            <div className="birthdayBox">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <DatePicker
                selected={birthDate}
                onChange={date => {
                  setBirthDate(date)
                  handleDateBirthValue(date)
                }}
                placeholderText="I have been cleared!"
                className="DatePicker"
                id="dateOfBirth"
                excludeTimes
              />
            </div>

            <div className="startDateBox">
              <label htmlFor="startDate">Start Date</label>
              <DatePicker
                selected={startDate}
                onSelect={date => setStartDate(date)}
                onChange={date => {
                  handleStartDateValue(date)
                }}
                placeholderText="I have been cleared!"
                className="DatePicker"
                id="startDate"
              />
            </div>
          </div>
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="containerCity">
            <InputBox
              id="street"
              className="streetBox"
              onChange={handleInputChange}
              type="text"
              content="Street"
            />

            <InputBox
              id="city"
              className="cityBox"
              onChange={handleInputChange}
              type="text"
              content="City"
            />
          </div>

          <div className="containerStateZip">
            <div className="stateBox">
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={states.name}
                onChange={handleInputChange}>
                {states.map((state, i) => (
                  <option value={state.name} key={`${state.abbreviation}-${i}`}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <InputBox
              id="zipCode"
              className="zipCodeBox"
              onChange={handleInputChange}
              type="number"
              content="Zip Code"
            />
          </div>
        </fieldset>

        <div className="departementBox">
          <label htmlFor="departement">Departement</label>
          <select
            name="departement"
            id="departement"
            onChange={handleInputChange}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </form>
      <div className="saveBtn">
        <button form="create-employee" type="submit">
          Save
        </button>
        <span className={error === true ? 'none' : 'msgError'}>
          {messageError}
        </span>
      </div>
    </div>
  )
}
export default Form
