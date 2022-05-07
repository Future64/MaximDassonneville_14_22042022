import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'employee',
    initialState: {
        submit: false,
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        departement: ''
    },
    reducers: {
        setSubmit: (state, action) => {
            state.submit = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setDateOfBirth: (state, action) => {
            state.dateOfBirth = action.payload
        },
        setStartDate: (state, action) => {
            state.startDate = action.payload
        },
        setStreet: (state, action) => {
            state.street = action.payload
        },
        setCity: (state, action) => {
            state.city = action.payload
        },
        setState: (state, action) => {
            state.state = action.payload
        },
        setZipCode: (state, action) => {
            state.zipCode = action.payload
        },
        setDepartement: (state, action) => {
            state.departement = action.payload
        }
    }
})

export const {
    setSubmit,
    setFirstName,
    setLastName,
    setDateOfBirth,
    setStartDate,
    setStreet,
    setCity,
    setState,
    setZipCode,
    setDepartement
} = userSlice.actions

export const employeeReducer = userSlice.reducer