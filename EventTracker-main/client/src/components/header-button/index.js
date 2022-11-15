import React from "react";
import './style.scss'
const DrawHeaderButton = ({setIsOpen}) =>{
    return(
        <a onClick={()=>{setIsOpen(true)}} href="#" className='header-button'>CONNECT</a>
    )
}
export default DrawHeaderButton
