import './style.scss'
import React from 'react'
const DrawBackgrounds = () =>{
    return(
        <div className='blocks-background'>
          <div className='blocks-background__main'></div>
          <div className='blocks-background__subMain'></div>
          <div className='blocks-background__top'></div>
          <div className='blocks-background__bottomMain'></div>
          <div className='blocks-background__bottomTriangle'></div>
        </div>
    )
}
export default DrawBackgrounds