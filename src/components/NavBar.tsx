import { ArrowCircleRight } from "phosphor-react"
import { useState } from "react"

interface SwitchThemeType{
    handleTheme: (text: React.ChangeEvent<HTMLSelectElement>) => void
    themeSelected: string
}

const NavBar = ({handleTheme, themeSelected}: SwitchThemeType) => {


  return (
    <div className="w-full h-navbar flex items-center justify-between xl:justify-between lg:justify-around text-white font-handLetter font-extrabold p-4 bg-gradient-to-br from-zinc-800 to-white/5 backdrop-opacity-80 shadow-xl">
        <span className="xl:w-1/2 w-1/3 flex items-center justify-center gap-2">
            <h1 className="text-lg xl:text-3xl lg:text-3xl md:text-2xl">StudyingTime - PomodoroApp</h1>
            <p className="hidden xl:text-3xl lg:text-3xl md:text-2xl">⏱️💻</p>
        </span>
        <div className="font-mainfont w-2/3 lg:w-1/2 xl:h-3/5 flex items-center justify-center xl:justify-center lg:justify-around gap-4">
            <div className="flex gap-4 items-center">
                <h3 className="text-white text-md xl:text-2xl lg:text-2xl md:text-2xl font-mainfont">Pick a theme </h3>
                <ArrowCircleRight size={40} weight='regular' color="#ffffff" className="md:max-lg:hidden lg:block md:block xl:block hidden"/>
            </div>
            <select 
                className="outline-none w-2/3 xl:w-1/3 xl:text-xl lg:text-xl md:text-xl p-2 rounded-xl bg-zinc-600 bg-opacity-30 text-white shadow-xl" 
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