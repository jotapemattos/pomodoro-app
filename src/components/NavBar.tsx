import { ArrowCircleRight } from "phosphor-react"
import { useState } from "react"

interface SwitchThemeType{
    handleTheme: (text: React.ChangeEvent<HTMLSelectElement>) => void
    themeSelected: string
}

const NavBar = ({handleTheme, themeSelected}: SwitchThemeType) => {


  return (
    <div className="w-full h-navbar flex items-center justify-around text-white font-handLetter font-extrabold p-4 bg-gradient-to-br from-zinc-800 to-white/5 backdrop-opacity-80 shadow-xl">
        <span>
            <h1 className="text-3xl">StudyingTime - PomodoroApp ⏱️💻</h1>
        </span>
        <div className="text-black font-mainfont w-2/6 flex items-center justify-center gap-4">
            <div className="flex gap-4 items-center">
                <h3 className="text-white text-lg font-mainfont">Choose your theme </h3>
                <ArrowCircleRight size={32} weight='regular' color="#ffffff"/>
            </div>
            <select 
                className="outline-none w-1/3 p-2 rounded-xl bg-zinc-600 bg-opacity-30 text-white shadow-xl" 
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