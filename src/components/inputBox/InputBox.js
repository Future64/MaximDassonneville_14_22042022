import React from 'react'
import './InputBox.css'

const InputBox = props => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.content}</label>
      <input id={props.id} type={props.type} onChange={props.onChange} />
    </div>
  )
}
export default InputBox
