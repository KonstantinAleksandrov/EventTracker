import React from 'react'
import './common.scss'
import DrawBackgrounds from './components/blocks-background/index'
import DrawHeaderButton from './components/header-button'
import DrowHeaderLogo from './components/header-logo'
import BlockCars from './components/blockCars'
import MainLogo from './components/main-logo'
import CaseContainer from './components/caseContainer'
import ProgressBar from './components/progressBar'
import Timer from './components/timer'
import Modal from './components/Modal/index'
import FormModal from './components/form-modal/index'
import { useState,useEffect,useRef} from 'react'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [filled, setFilled] = useState(0)
  const wrapper = useRef()
  useEffect(()=>{
    /* if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      wrapper.current.style.width = 100 + '%'
      wrapper.current.style.height = 100 + '%'
      
      console.log(window.innerHeight)
    } */
  },[])
  return (
    <div className="App">
      <div ref={wrapper} className='wrapper'>
        <DrawBackgrounds />
        <header className='header'>
          <DrowHeaderLogo />
          <DrawHeaderButton setIsOpen={setIsOpen} />
        </header>
        <main className='main'>
          <div className='main-container'>
            <MainLogo />
            <CaseContainer />
            <ProgressBar filled={filled} setFilled={setFilled} />
            <div className='main-price'><span>1.00</span></div>
              <div onClick={() => { setFilled(filled + 10) }} className='main-button'><span>buy</span></div>
            {/* <Timer /> */}
          </div>
        </main>
        <BlockCars />
        {isOpen
          &&
          <Modal setIsOpen={setIsOpen}>
            <FormModal setIsOpen={setIsOpen}/>
          </Modal>}
      </div>
    </div>
  );
}

export default App;
