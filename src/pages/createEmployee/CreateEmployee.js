// import Form from 'components/Form/Form';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayModal, setArrayEmployee } from '../../redux/reducer'
import Form from '../../components/form/Form'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './CreateEmployee.css'
import { SimpleReactModalMax } from 'simple-react-modal-max'

const CreateEmployee = () => {
  const dispatch = useDispatch()
  const display = useSelector(state => {
    return state
  })

  function helloModal() {
    if (display.employee.displayModal == true) {
      return (
        <>
          <SimpleReactModalMax
            isOpen={true}
            onClose="rightTop"
            responsive={true}
            pageOpacity="soft"
            openAnim={true}
            closeAnim={true}
            txtColor="green">
            <p>Employee Created!</p>
          </SimpleReactModalMax>
        </>
      )
    }
  }

  useEffect(() => {
    dispatch(setDisplayModal(false))
  }, [])

  return (
    <main className="main">
      <Header />
      <h1>CREATE EMPLOYEE</h1>
      <Form />
      {helloModal()}
      <Footer />
    </main>
  )
}

export default CreateEmployee
