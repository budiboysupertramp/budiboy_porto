import React, { useEffect, useState } from 'react'
import Dark from '../../assets/icon/dark.svg'
import Light from '../../assets/icon/light.svg'

const ButtonDarkMode = ({toggleDarkMode, isDark}) => {
    // const [isDark, setDark] = useState(() => {
    //     return localStorage.getItem('app-theme')|| 'light'
    // })

    // useEffect(()=> {
    //     localStorage.setItem('app-theme', isDark)

    //     if(isDark === 'dark') {
    //         document.documentElement.classList.add('dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //     }
    // }, [isDark])

    // const toggleDarkMode = () => {
    //     setDark((prev) => (prev === 'light' ? 'dark' : 'light'))
    // }

   
    return (
        <button onClick={toggleDarkMode} className={`z-[50] w-[50px] h-[50px] rounded-[8px] text-white fixed bottom-9 right-5 flex justify-center items-center ${isDark === 'dark' ? "bg-[white]" : "bg-[black]"}`}>
           <img src= {isDark === 'dark' ? Light : Dark } alt="icon-darkmode" className={isDark === 'dark' ? '' : 'invert'} /> 
        </button>
    )
}

export default ButtonDarkMode
