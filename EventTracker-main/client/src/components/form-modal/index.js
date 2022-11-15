import React from "react";
import './style.scss'
import cross from './img/cross.svg'
const FormModal = ({ setIsOpen }) => {
    return (
        <div className="modal1" onClick={(e) => e.stopPropagation()}>
            <div className="modal1-title">Mystery boxes amount</div>
            <div className="modal1-input">
                <input type='number' placeholder="Set amount of boxes" />
                <span>max 15</span>
            </div>
            <div className="modal1-total">
                <div className="modal1-total__left">
                    <div className="modal1-total__text">total:</div>
                    <span></span>
                </div>
                <div className="modal1-total__right">
                    <span>0.00</span>
                </div>
            </div>
            <div className='main-button'><span>Confirm</span></div>
            <div className="closeCross" onClick={() => setIsOpen(false)}>
                <img src={cross} alt="cross" />
            </div>
        </div>
    )
}
export default FormModal