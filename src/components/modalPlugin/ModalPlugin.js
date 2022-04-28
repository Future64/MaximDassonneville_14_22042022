import React from 'react'
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react'
import { useParams, useLocation, useMatch, NavLink} from 'react-router-dom'
import Logo from '../logo/Logo'
import './ModalPlugin.css'
import './optionPlugin.css'

const ModalPlugin = (props) => {
    const[activeModal, setActiveModal] = useState("")
    const[viewCloseBtn, setViewCloseBtn] = useState("")
    const[responsiveModal, setResponsiveModal] = useState("")
    const[openAnimModal, setOpenAnimModal] = useState("")
    const[closeAnimModal, setcloseAnimModal] = useState("")
    const[bgColorModal, setBgColorModal] = useState("")
    const[txtColorModal, setTxtColor] = useState("")
    const[pageOpacityModal, setPageOpacityModal] = useState("")
    const [close, setClose] = useState("")

/* Setting the options for the modal. */
    const options = {
        isOpen: props.isOpen,
        onClose: props.onClose,
        responsive: props.responsive,
        openAnim: props.openAnim,
        closeAnim: props.closeAnim,
        bgColor: props.bgColor,
        txtColor: props.txtColor,
        pageOpacity: props.pageOpacity,
    }

/**
 * If the isOpen prop is true, set the activeModal state to "activeModal", otherwise set it to an empty
 * string.
 */
    function handleIsOpen(){
        if(options.isOpen === true){
            setActiveModal("activeModal")
            setClose("")
        } else {
            setActiveModal("")
            setClose("close")
        }
    }

/**
 * If the user has set the onClose option to true, then set the viewCloseBtn class to "viewCloseBtn",
 * otherwise set it to an empty string
 */
    function handleOnClose(){
        if(options.onClose === true){
            setViewCloseBtn("viewCloseBtn")
        } else {
            setViewCloseBtn("")
        }
    }

/**
 * If the user has set the responsive option to true, then set the responsiveModal class on the modal.
 * Otherwise, remove the responsiveModal class from the modal
 */
    function handleResponsive(){
        if(options.responsive === true){
            setResponsiveModal("responsiveModal")
        } else {
            setResponsiveModal("notResponsive")
        }
    }

/**
 * If the openAnim option is set to true, then add the openAnimModal class to the modal
 */
    function handleOpenAnim(){
        if(options.openAnim === true){
            setOpenAnimModal("openAnimModal")
        } else {
            setOpenAnimModal("")
        }
    }

/**
 * If the closeAnim option is set to true, then add the closeAnimModal class to the modal
 */
    function handleCloseAnim(){
        if(options.closeAnim === true){
            setcloseAnimModal("closeAnimModal")
        } else {
            setcloseAnimModal("")
        }
    }

/**
 * If the user has selected the option to change the background color, then set the background color of
 * the modal to the color the user has selected
 */
    function handleBgColor(){
        if(options.bgColor === true){
            setBgColorModal("bgColorModal")
        } else {
            setBgColorModal("")
        }
    }

/**
 * If the user wants to change the text color, then set the text color to the color the user wants
 */
    function handleTxtColor(){
        if(options.txtColor === true){
            setTxtColor("txtColorModal")
        } else {
            setTxtColor("")
        }
    }

/**
 * If the pageOpacity option is set to true, then set the pageOpacityModal class to the
 * pageOpacityModal class, otherwise set it to an empty string
 */
    function handlePageOpacity(){
        if(options.pageOpacity === true){
            setPageOpacityModal("pageOpacityModal")
        } else {
            setPageOpacityModal("")
        }
    }

/**
 * If the close variable is equal to "close", then set the close variable to "activeModal" and set the
 * ActiveModal variable to "activeModal"
 */
    function handleCloseModal(){
        if(close === "close"){
            setClose("activeModal")
            setActiveModal("activeModal")
        }
        setActiveModal("")
        setClose("close")
    }

    useEffect(() => {
        handleIsOpen()
        handleOnClose()
        handleResponsive()
        handleOpenAnim()
        handleCloseAnim()
        handleBgColor()
        handleTxtColor()
        handlePageOpacity()
    }, [])

  return (
    <div className={`${close} ${activeModal} ${openAnimModal} ${closeAnimModal} ${pageOpacityModal}`}>
        <div className={`messageBox ${close} ${bgColorModal} ${responsiveModal}`}>
            <div className={`closeModal ${close} ${viewCloseBtn}`} onClick={(e) => handleCloseModal()}>x</div>
            <div className={`createdMsgBox ${close}`}>
                <p className={`createdMsg ${close} ${txtColorModal}`}>Employee Created!</p>
            </div>
        </div>

    </div>
  )
}
export default ModalPlugin