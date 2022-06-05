import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
  const titleError = 'Erreur 404!'
  return (
    <>
      <div className="boxError">
        <h2>{titleError}</h2>
        <Link to="/">CURRENT EMPLOYEE</Link>
      </div>
    </>
  )
}
export default Error404
