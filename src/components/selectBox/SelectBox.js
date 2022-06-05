import React from 'react'
import './SelectBox.css'
import PropTypes from 'prop-types'

const SelectBox = ({ className, id, onChange, options, value }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{id}</label>
      <select id={id} onChange={onChange}>
        {options.map((option, i) => (
          <option
            value={value}
            key={
              option.abbreviation == undefined
                ? `${option.name}-${i}`
                : `${option.abbreviation}-${i}`
            }>
            {option.name == undefined ? option.option : option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
export default SelectBox

SelectBox.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
}
