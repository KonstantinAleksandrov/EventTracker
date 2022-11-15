import React from "react";
import './style.scss'
import { useState,useRef,useMemo} from "react";
const Timer = () => {
    const needDate = useRef()
    needDate.current = new Date('Jan 1 2023 00:00:00')
    const [time, setTime] = useState({ days: '', hours: '', minutes: '', seconds: '' })
        useMemo(()=>{
            const timerId = setInterval(() => {
                const now = new Date()
                const difference = needDate.current - now
                setTime({
                    days : Math.floor(difference / 1000 / 60 / 60 / 24),
                    hours : Math.floor(difference / 1000 / 60 / 60) % 24,
                    minutes : Math.floor(difference / 1000 / 60) % 60,
                    seconds : Math.floor(difference / 1000) % 60,
                })
                clearInterval(timerId)
            }, 1000)
        },[time])
    console.log(2)
    return (
        <ul className='main-blockTimer'>
            <li className='main-blockTimer__item item-blockTimer'>
                <span className='item-blockTimer__number'>{time.days}</span>
                <span className='item-blockTimer__type'>days</span>
            </li>
            <li className='main-blockTimer__item item-blockTimer'>
                <span className='item-blockTimer__number'>{time.hours}</span>
                <span className='item-blockTimer__type'>HOURS</span>
            </li>
            <li className='main-blockTimer__item item-blockTimer'>
                <span className='item-blockTimer__number'>{time.minutes}</span>
                <span className='item-blockTimer__type'>MINUTES</span>
            </li>
            <li className='main-blockTimer__item item-blockTimer'>
                <span className='item-blockTimer__number'>{time.seconds}</span>
                <span className='item-blockTimer__type'>SECONDS</span>
            </li>
        </ul>
    )
}
export default Timer