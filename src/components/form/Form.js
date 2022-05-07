import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import states from '../../utils/states'

const Form = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const [messageError, setMessageError] = useState('')
    const [userInputs, setUserInputs] = useState({
        submit: false,
        firstName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        departement: ''
    })

    function handleInputChange(event) {
        const inputName = event.target.name
        setUserInputs({ ...userInputs, [inputName]: event.target.value })
        if (event.target.value.length == 0) {
            setMessageError('You must fill all the fields')
        } else {
            setMessageError('')
        }
    }

    function navigateTo(tokenState) {
        if (tokenState !== null) {
            navigate('/profile')
        }
    }

    function saveSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className='container'>
            <form id='create-employee' onSubmit={ (e) => saveSubmit(e) }>
                <div className='infoEmployee'>
                    <div className='containerNames'>
                        <div className='firstNameBox'>
                            <label htmlFor='first-name'>First Name</label>
                            <input type='text' id='first-name' onChange={ handleInputChange } />
                        </div>

                        <div className='lastNameBox'>
                            <label htmlFor='last-name'>Last Name</label>
                            <input type='text' id='last-name' />
                        </div>
                    </div>

                    <div className='containerDates'>
                        <div className='birthdayBox'>
                            <label htmlFor='date-of-birth'>Date of Birth</label>
                            <DatePicker selected={ startDate }
                                        onChange={ (date) => setStartDate(date) }
                                        placeholderText='I have been cleared!'
                                        className='DatePicker' />
                        </div>

                        <div className='startDateBox'>
                            <label htmlFor='start-date'>Start Date</label>
                            <DatePicker selected={ startDate }
                                        onChange={ (date) => setStartDate(date) }
                                        placeholderText='I have been cleared!'
                                        className='DatePicker' />
                        </div>
                    </div>
                </div>

                <fieldset className='address'>
                    <legend>Address</legend>

                    <div className='containerCity'>
                        <div className='streetBox'>
                            <label htmlFor='street'>Street</label>
                            <input id='street' type='text' />
                        </div>

                        <div className='cityBox'>
                            <label htmlFor='city'>City</label>
                            <input id='city' type='text' />
                        </div>
                    </div>

                    <div className='containerStateZip'>
                        <div className='stateBox'>
                            <label htmlFor='state'>State</label>
                            <select name='state' id='state' value={ states.name }>
                                { states.map((state, i) => (
                                    <option value={ state.name }
                                            key={ `${ state.abbreviation }-${ i }` }>
                                        { state.name }
                                    </option>)
                                )
                                }
                            </select>
                        </div>

                        <div className='zipCodeBox'>
                            <label htmlFor='zip-code'>Zip Code</label>
                            <input id='zip-code' type='number' />
                        </div>
                    </div>
                </fieldset>

                <div className='departementBox'>
                    <label htmlFor='department'>Department</label>
                    <select name='department' id='department'>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </div>
            </form>
            <div className='saveBtn'>
                <button onClick={ (e) => saveSubmit(e) }>Save</button>
            </div>
        </div>
    )
}
export default Form