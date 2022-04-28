import React from 'react'
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react'
import { useParams, useLocation, useMatch, NavLink} from 'react-router-dom'
import Logo from '../logo/Logo'
import './ModalPlugin.css'

const ModalPlugin = () => {
    const [close, setClose] = useState("ModalPage")
    function handleCloseModal(){
        if(close == "close"){
            setClose("ModalPage")
        }
        setClose("close")
    }
  return (
    <div className={close}>
        <div className='massageBox'>
            <div className='closeModal' onClick={(e) => handleCloseModal()}>x</div>
            <div className='createdMsgBox'>
                <p className='createdMsg'>Employee Created!</p>
            </div>
        </div>

    </div>
  )
}
export default ModalPlugin