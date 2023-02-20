import { useContext, useEffect, useState } from "react"
import { PercentageContext } from "../context/PercentagesContext"
import { SettingsContext } from "../context/SettingsTimesContext"
import { TimesContext } from "../context/TimesContext"
import Settings from "./Settings"
import SwitchMethod from "./SwitchMethod"
import Timer from "./Timer"


const MainContent = () => {
  const { pomodoroTime, shortBreakTime, longBreakTime, setPomodoroTime, setShortBreakTime, setLongBreakTime} = useContext(TimesContext) 
  const { settingsValuesPomodoro,  settingsValuesShort,  settingsValuesLong} = useContext(SettingsContext)
  const {percentagePomodoro, setPercentagePomodoro, percentageShort, setPercentageShort, percentageLong, setPercentageLong} = useContext(PercentageContext)
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
        <div className="bg-gradient-to-br from-zinc-800 to-white/5 backdrop-opacity-80 shadow-xl w-4/5 h-main lg:w-2/3 lg:h-4/5 xl:w-1/3 xl:h-main rounded-xl p-4 mt-20 flex flex-col gap-6 items-center justify-between">
              <SwitchMethod method={method} setPomodoro={setPomodoro} setShortBreak={setShortBreak} setLongBreak={setLongBreak}/>
              <Timer setPomodoro={setPomodoro} setShortBreak={setShortBreak} setLongBreak={setLongBreak} start={start} setStart={setStart} method={method} totalSeconds={totalSeconds}/>
              <Settings/>
        </div>
    </div>
  )
}

export default MainContent