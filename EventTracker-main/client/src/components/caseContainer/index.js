import React from "react";
import './style.scss'
import caseImg from './img/case1.png'
import caseShadow from './img/caseShadow.png'

const CaseContainer = () => {
    return (
        <div className='main-caseContainer'>
            <img className='caseShadow' src={caseShadow} alt='caseShadow' />
            <img className='case' src={caseImg} alt='case' />
        </div>
    )
}
export default CaseContainer