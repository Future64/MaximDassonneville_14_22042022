import React from 'react'
import { useState, useEffect} from 'react'
import './ModalPlugin.css'

const ModalPlugin = (props) => {
    const[activeModal, setActiveModal] = useState("")
    const[viewCloseBtn, setViewCloseBtn] = useState("")
    const[responsiveModal, setResponsiveModal] = useState("")
    const[bgColorModal, setBgColorModal] = useState("")
    const[txtColorModal, setTxtColor] = useState("")
    const[pageOpacityModal, setPageOpacityModal] = useState("")
    const [close, setClose] = useState("")
    const [content, setContent] = useState("")
    const [msgBox, setMsgBox] = useState("")

/* Setting the options for the modal. */
    const options = {
        isOpen: props.isOpen,
        onClose: props.onClose,
        responsive: props.responsive,
        openAnim: props.openAnim,
        closeAnim: props.closeAnim,
        content: props.content,
        txtColor: props.txtColor,
        pageOpacity: props.pageOpacity,
    }

/**
 * If the modal is open, set the message box to the message box class, set the active modal to the
 * active modal class, and set the close button to the close button class
 */
    function handleIsOpen(){
        if(options.isOpen === true && options.openAnim == undefined || options.openAnim == false) {
            setMsgBox("messageBox")
            setActiveModal("activeModal")
            setClose("")
        } else if (options.isOpen === true && options.openAnim === true){
            setMsgBox("messageBoxAnim")
            setActiveModal("activeModalAnim")
            setClose("")
        } else if (options.isOpen === true && options.openAnim === true && options.closeAnim === true){
            setMsgBox("messageBoxAnim")
            setActiveModal("activeModalAnimfull")
            setClose("")
        } else {
            setActiveModal("")
            setClose("close")
        }
    }

/**
 * It sets the viewCloseBtn class to the appropriate class based on the options.onClose value
 */
    function handleOnClose(){
        if(options.onClose === "rightTop"){
            setViewCloseBtn("viewCloseBtnRightTop")
        } else if(options.onClose === "leftTop"){
            setViewCloseBtn("viewCloseBtnLeftTop")
        } else if(options.onClose === "leftBottom"){
            setViewCloseBtn("viewCloseBtnLeftBottom")
        } else if(options.onClose === "rightBottom"){
            setViewCloseBtn("viewCloseBtnRightBottom")
        } else {
            setViewCloseBtn("viewCloseBtnRightTop")
        }
    }

/**
 * If the user has set the responsive option to true, then set the modal to be responsive
 */
    function handleResponsive(){
        if(options.responsive === true){
            setResponsiveModal("responsiveModal")
        } else {
            setResponsiveModal("notResponsive")
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
 * The function `handleTxtColor()` is called when the user changes the text color. The function checks
 * the value of the `options.txtColor` property and sets the text color accordingly
 */
    function handleTxtColor(){
        if(options.txtColor === "black" ){
            setTxtColor("black")
        } else if(options.txtColor === "green"){
            setTxtColor("green")
        } else if(options.txtColor === "red"){
            setTxtColor("red")
        } else if(options.txtColor === "orange"){
            setTxtColor("orange")
        } else if(options.txtColor === "violet"){
            setTxtColor("violet")
        } else if(options.txtColor === "blue"){
            setTxtColor("blue")
        } else if(options.txtColor === "yellow"){
            setTxtColor("yellow")
        } else {
            setTxtColor("black")
        }
    }

/**
 * If the pageOpacity option is set to "soft", "standard", "very", or "full", then set the page opacity
 * to the corresponding value. Otherwise, set the page opacity to "none".
 */
    function handlePageOpacity(){
        if(options.pageOpacity === "soft"){
            setPageOpacityModal("soft")
        } else if(options.pageOpacity === "standard"){
            setPageOpacityModal("standard")
        } else if(options.pageOpacity === "very"){
            setPageOpacityModal("very")
        } else if(options.pageOpacity === "full"){
            setPageOpacityModal("full")
        } else {
            setPageOpacityModal("none")
        }
    }

/**
 * If the close button is clicked, and the closeAnim option is undefined or false, then the modal is
 * closed. If the closeAnim option is true, then the modal is closed with an animation. If the
 * closeAnim option is anything else, then the modal is closed without an animation
 */
    function handleCloseModal(){
        if(close === "close" && options.closeAnim === undefined || options.closeAnim === false){
            setClose("activeModal")
            setActiveModal("activeModal")
        } else if (options.closeAnim === true){ 
            setActiveModal("activeModalAnimfull")
        } else {
            setActiveModal("")
            setClose("close")
        }
    }

    useEffect(() => {
        handleIsOpen()
        handleOnClose()
        handleResponsive()
        handleBgColor()
        handleTxtColor()
        handlePageOpacity()
        setContent(options.content)
    }, [])

  return (
    <div className={`${close} ${activeModal} ${pageOpacityModal}`}>
        <div className={`messageBox ${close} ${bgColorModal} ${responsiveModal} ${msgBox}`}>
            <div className={`closeModal ${close} ${viewCloseBtn}`} onClick={(e) => handleCloseModal()}>x</div>
            <div className={`createdMsgBox ${close}`}>
                <p className={`createdMsg ${close} ${txtColorModal}`}>{content}</p>
            </div>
        </div>
    </div>
  )
}
export default ModalPlugin