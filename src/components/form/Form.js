import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayModal, setArrayEmployee } from '../../redux/reducer'
import './Form.css'
import InputBox from '../inputBox/InputBox'
import SelectBox from '../selectBox/SelectBox'
import states from '../../utils/states'
import departement from '../../utils/departement'

const Form = () => {
  const formRef = useRef()
  const dispatch = useDispatch()
  const arrayEmployee = useSelector(state => {
    return state
  })

  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [error, setError] = useState(false)
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

  /**
   * It takes the input from the form and sets the state of the form to the input
   * @param event - the event that triggered the function
   */
  function handleInputChange(event) {
    const inputName = event.target.id
    setUserInputs({ ...userInputs, [inputName]: event.target.value })
    if (
      formRef.current[0].value.length == 0 ||
      formRef.current[1].value.length == 0 ||
      formRef.current[2].value.length == 0 ||
      formRef.current[3].value.length == 0 ||
      formRef.current[5].value.length == 0 ||
      formRef.current[6].value.length == 0
    ) {
      setError(false)
    } else {
      setError(true)
    }
  }

  /**
   * It resets the form, sets the birth date to today, and sets the start date to today
   */
  function refreshForm() {
    formRef.current.reset()
    setBirthDate(new Date())
    setStartDate(new Date())
  }

  /**
   * It takes the date of birth value from the date picker and sets it to the state
   * @param e - the event object
   */
  function handleDateBirthValue(e) {
    setUserInputs({
      ...userInputs,
      ['dateOfBirth']: e.toLocaleDateString('en-US'),
    })
  }

  /**
   * It takes the date value from the date picker and sets it to the startDate key in the userInputs
   * object
   * @param e - The event object
   */
  function handleStartDateValue(e) {
    setUserInputs({
      ...userInputs,
      ['startDate']: e.toLocaleDateString('en-US'),
    })
  }

  /**
   * It saves the data in the form and displays it in the table
   * @param e - the event object
   */
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
    }
    setMessageError('You must fill all the fields!')
  }

  return (
    <div className="container">
      <form
        ref={formRef}
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
            <SelectBox
              className="stateBox"
              name="state"
              id="state"
              value={states[0].name}
              onChange={handleInputChange}
              options={states}
            />

            <InputBox
              id="zipCode"
              className="zipCodeBox"
              onChange={handleInputChange}
              type="number"
              content="Zip Code"
            />
          </div>
        </fieldset>
        <SelectBox
          className="departementBox"
          name="departement"
          id="departement"
          value={departement[0].option}
          onChange={handleInputChange}
          options={departement}
        />
      </form>
      <div className="saveBtn">
        <button form="create-employee" type="submit">
          Save
        </button>
        <span
          data-testid="Errormsg"
          className={error === true ? 'none' : 'msgError'}>
          {messageError}
        </span>
      </div>
    </div>
  )
}
export default Form
