import React from 'react'
import './common.scss'
import DrawBackgrounds from './components/blocks-background/index'
import DrawHeaderButton from './components/header-button'
import DrowHeaderLogo from './components/header-logo'
import mainLogo from './icons/mainLogo.png'
import caseImg from './img/case1.png'
import caseShadow from './img/caseShadow.png'
import {useState,useEffect,useRef} from 'react'
import carLeft from './img/cars/leftCar.png'
import carRight from './img/cars/rightCar.png'
function App() {
  const [filled,setFilled] = useState(0)
  const [progress,setProgress] = useState(0)
  const progressBar = useRef()

  useEffect(()=>{
    const onePercent = (progressBar.current.offsetWidth / 100)
    if(filled > 100){
      setProgress(0)
      setFilled(0)
    }else{
      setProgress(onePercent * filled)
    }
  },[filled])

  return (
    <div className="App">
      <div className='wrapper'>
        <DrawBackgrounds />
        <header className='header'>
          <DrowHeaderLogo />
          <DrawHeaderButton />
        </header>
        <main className='main'>
          <div className='main-container'>
            <div className='main-logo'>
              <img src={mainLogo} alt='mainLogo' />
            </div>
            <div className='main-caseContainer'>
              <img className='caseShadow' src={caseShadow} alt='caseShadow' />
              <img className='case' src={caseImg} alt='case' />
            </div>
            <div className='main-progressBar__container container-progressBar'>
              <div className='container-progressBar__header'>
                <div className='container-progressBar__title'>SWAP Progress</div>
                <div className='container-progressBar__subTitle'>
                  <span className='container-progressBar__percent'>123</span>
                  <div className='container-progressBar__numbers numbers-progressBar'>
                    <span className='numbers-progressBar-before'>123</span>
                    /
                    <span className='numbers-progressBar-after'>321</span>
                  </div>
                </div>
              </div>
              <div  ref={progressBar} className='container-progressBar__body'>
                <div style={{width:progress + 'px'}} className='container-progressBar__band'></div>
              </div>
            </div>
            <div className='main-price'><span>1.00</span></div>
            <div onClick={()=>{setFilled(filled + 10)}} className='main-button'><span>buy</span></div>
          </div>
        </main>
        <div className='block-cars'>
              <div className='block-cars__carLeft'>
                <img src={carLeft} alt='car'/>
              </div>
              <div className='block-cars__carRight'>
              <img src={carRight} alt='car'/>
              </div>
            </div>
      </div>
    </div>
  );
}

export default App;
