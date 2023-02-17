import { ArrowCircleRight, List } from "phosphor-react"
import { useState } from "react"

interface SwitchThemeType{
    handleTheme: (text: React.ChangeEvent<HTMLSelectElement>) => void
    themeSelected: string
}

const NavBar = ({handleTheme, themeSelected}: SwitchThemeType) => {
  

  return (
    <div className="w-full h-navbar flex items-center justify-between text-white font-handLetter font-extrabold p-4 bg-gradient-to-br from-zinc-800 to-white/5 backdrop-opacity-80 shadow-xl">
        <span className="w-2/3 md:justify-start xl:justify-center flex items-center justify-center gap-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl">StudyingTime - PomodoroApp</h1>
            <p className="hidden md:max-2xl:flex text-lg md:text-xl lg:text-3xl">⏱️💻</p>
        </span>
        <div className="font-mainfont w-1/2 md:max-2xl:w-2/3 flex items-center justify-center xl:justify-center md:justify-end gap-4">
            <div className="hidden md:max-2xl:block">
                <h3 className="text-white text-md md:text-xl xl:text-2xl font-mainfont">Pick a theme</h3>
            </div>
            
            <select 
                className="outline-none w-full md:w-1/3 p-2 rounded-xl bg-zinc-600 bg-opacity-30 text-white md:text-lg xl:text-xl shadow-xl" 
                name="theme" 
                value={themeSelected} 
                onChange={handleTheme}
            >
                <option className="bg-zinc-600" value="spring">spring ✨</option>
                <option className="bg-zinc-600" value="summer">summer ☀️</option>
                <option className="bg-zinc-600" value="fall">fall 🍂</option>
                <option className="bg-zinc-600" value="winter">winter ❄️</option>
            </select>
        </div>
    </div>
  )
}

export default NavBar