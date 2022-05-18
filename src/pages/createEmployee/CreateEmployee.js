// import Form from 'components/Form/Form';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayModal } from '../../redux/reducer'
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

  /**
   * If the displayModal property of the employee object in the display object is true, then return the
   * SimpleReactModalMax component
   * @returns The modal is being returned.
   */
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
