import React from "react";
import './style.scss'
import mainLogo from './img/mainLogo.png'
const MainLogo = () => {
    return (
        <div className='main-logo'>
            <img src={mainLogo} alt='mainLogo' />
        </div>
    )
}
export default MainLogo