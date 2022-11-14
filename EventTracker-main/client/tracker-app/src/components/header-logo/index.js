import React from "react";
import './style.scss'
import headerLogo from './icons/headerLogo.png'
const DrowHeaderLogo = () => {
    return (
        <div className='header-logo'>
            <img src={headerLogo} alt='logo' />
        </div>
    )
}
export default DrowHeaderLogo