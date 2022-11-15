import React from "react";
import './style.scss'
import headerLogo from './icons/headerLogo.png'
const DrowHeaderLogo = () => {
    return (
        <div className='header-logo'>
            <a href="#"><img src={headerLogo} alt='logo' /></a>
        </div>
    )
}
export default DrowHeaderLogo