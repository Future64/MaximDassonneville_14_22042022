import React from 'react'
import './InputBox.css'
import PropTypes from 'prop-types'

const InputBox = ({ className, id, content, type, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{content}</label>
      <input id={id} type={type} onChange={onChange} />
    </div>
  )
}
export default InputBox

InputBox.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
