import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'employee',
  initialState: {
    displayModal: false,
    arrayEmployee: [],
  },
  reducers: {
    setDisplayModal: (state, action) => {
      state.displayModal = action.payload
    },
    setArrayEmployee: (state, action) => {
      state.arrayEmployee = action.payload
    },
  },
})

export const { setDisplayModal, setArrayEmployee } = userSlice.actions

export const employeeReducer = userSlice.reducer
