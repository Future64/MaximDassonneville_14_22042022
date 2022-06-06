import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Form from '../components/form/Form.js'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header.js'
import { store } from '../redux/store'

describe('Form', () => {
  test('Inputs value should be empty', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    )
    const firstName = screen.getByTestId('firstName')
    const lastName = screen.getByTestId('lastName')
    const street = screen.getByTestId('street')
    const city = screen.getByTestId('city')
    const zipCode = screen.getByTestId('zipCode')
    expect(firstName.value).toBe('')
    expect(lastName.value).toBe('')
    expect(street.value).toBe('')
    expect(city.value).toBe('')
    expect(zipCode.value).toBe('')
  })
  test('Error message should be hidden', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    )
    const errorMsg = screen.getByTestId('Errormsg')
    expect(errorMsg.className).toBe('msgError')
  })
})

describe('Footer', () => {
  test('Should be className="Footer"', async () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    )
    const classname = document.querySelector('.Footer')
    expect(classname.className).toEqual('Footer')
  })
})

describe('Header', () => {
  test('Should be className="header"', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
    const classname = document.querySelector('.header')
    expect(classname.className).toEqual('header')
  })
})
