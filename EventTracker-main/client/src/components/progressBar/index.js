import React from "react";
import './style.scss'
import {useEffect} from 'react'

const ProgressBar = ({filled,setFilled}) => {
    useEffect(() => {
        if (filled > 100) {
             setFilled(0)
        } 
    }, [filled])
    return (
        <div className='main-progressBar__container container-progressBar'>
            <div className='container-progressBar__header'>
                <div className='container-progressBar__title'>SWAP Progress</div>
                <div className='container-progressBar__subTitle'>
                    <span className='container-progressBar__percent'>123</span>
                    <div className='container-progressBar__numbers numbers-progressBar'>
                        <span className='numbers-progressBar-before'>12300000</span>
                        /
                        <span className='numbers-progressBar-after'>32100000</span>
                    </div>
                </div>
            </div>
            <div className='container-progressBar__body'>
                <div style={{ width: filled + '%' }} className='container-progressBar__band'></div>
            </div>
        </div>
    )
}
export default ProgressBar