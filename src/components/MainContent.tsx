import { useContext, useEffect, useState } from "react"
import { SettingsContext } from "../context/SettingsTimesContext"
import { TimesContext } from "../context/TimesContext"
import Settings from "./Settings"
import Timer from "./Timer"


const MainContent = () => {
  const { pomodoroTime, shortBreakTime, longBreakTime, setPomodoroTime, setShortBreakTime, setLongBreakTime} = useContext(TimesContext) 
  const { settingsValuesPomodoro,  settingsValuesShort,  settingsValuesLong} = useContext(SettingsContext)
  const [start, setStart] = useState(false)
  const [method, setMethod] = useState('')
  const [totalSeconds, setTotalSeconds] = useState(0)
   
  useEffect(()=>{
    setMethod('pomodoro')
    setPomodoroTime(1500)
    setStart(false)
  }, [])

  useEffect(()=>{
    setShortBreak(settingsValuesShort)
  }, [settingsValuesShort])

  useEffect(()=>{
    setLongBreak(settingsValuesLong)
  }, [settingsValuesLong])

  function setPomodoro (settingsValuesPomodoro:number){
    setMethod('pomodoro')
    setPomodoroTime(settingsValuesPomodoro)
    setTotalSeconds(settingsValuesPomodoro)
    setStart(false)
  }  

  useEffect(()=>{
    setPomodoro(settingsValuesPomodoro)
  }, [settingsValuesPomodoro])

  function setShortBreak (settingsValuesShort: number){
    setMethod('shortbreak')
    setShortBreakTime(settingsValuesShort)
    setTotalSeconds(settingsValuesShort)
    setStart(false)
  }  

  function setLongBreak (settingsValuesLong: number){
    setMethod('longbreak')
    setLongBreakTime(settingsValuesLong)
    setTotalSeconds(settingsValuesLong)
    setStart(false)
  } 

  return (
    <div className="h-full w-full min-w-screen flex items-center justify-center">
        <div className="bg-gradient-to-br from-zinc-800 to-white/5 backdrop-opacity-80 shadow-xl w-1/3 h-4/5 rounded-xl p-4 flex flex-col items-center justify-between">
            <nav className="flex justify-around items-center gap-4 text-white rounded-full w-4/5 h-timeOptions">
                {method === 'pomodoro' ? (
                  <button 
                  className="h-full w-1/3  font-mainfont text-lg font-extrabold rounded-md text-black bg-white hover:bg-transparent hover:text-white border-2 border-white transition-all duration-500 hover:scale-105" 
                  onClick={e => setPomodoro(settingsValuesPomodoro)}>Pomodoro
                </button>
                ): (
                  <button 
                    className="h-full w-1/3 font-mainfont text-lg font-extrabold rounded-md hover:bg-white hover:text-black border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setPomodoro(settingsValuesPomodoro)}>Pomodoro
                  </button>
                )}
                {method === 'shortbreak' ? (
                  <button 
                    className="h-full w-1/3 font-mainfont text-lg font-extrabold rounded-md  text-black bg-white hover:bg-transparent hover:text-white border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setShortBreak(settingsValuesShort)}>Short Break
                  </button>
                ): (
                  <button 
                    className="h-full w-1/3 font-mainfont text-lg font-extrabold rounded-md hover:bg-white hover:text-black border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setShortBreak(settingsValuesShort)}>Short Break
                  </button>
                )}
                {method === 'longbreak' ? (
                  <button 
                    className="h-full w-1/3 font-mainfont text-lg font-extrabold rounded-md text-black bg-white hover:bg-transparent hover:text-white border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setLongBreak(settingsValuesLong)}>Long Break
                  </button>
                ): (
                  <button 
                    className="h-full w-1/3 font-mainfont text-lg font-extrabold rounded-md hover:bg-white hover:text-black border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setLongBreak(settingsValuesLong)}>Long Break
                  </button>
                )}
            </nav>
              <Timer setPomodoro={setPomodoro} setShortBreak={setShortBreak} setLongBreak={setLongBreak} start={start} setStart={setStart} method={method} totalSeconds={totalSeconds}/>
              <Settings/>
        </div>
    </div>
  )
}

export default MainContent