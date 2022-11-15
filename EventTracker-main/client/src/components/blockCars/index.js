import React from "react";
import './style.scss'
import carLeft from './img/leftCar.png'
import carRight from './img/rightCar.png'
const BlockCars = ()=>{
    return(
        <div className='block-cars'>
          <div className='block-cars__carLeft'>
            <img src={carLeft} alt='car' />
          </div>
          <div className='block-cars__carRight'>
            <img src={carRight} alt='car' />
          </div>
        </div>
    )
}
export default BlockCars