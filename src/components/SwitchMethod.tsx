import { useContext } from 'react'
import { SettingsContext } from '../context/SettingsTimesContext'

interface SwitchMethodProps {
    method: string,
    setPomodoro: (number: number) => void,
    setShortBreak: (number: number) => void,
    setLongBreak: (number: number) => void,
}

const SwitchMethod = ({method, setPomodoro, setShortBreak, setLongBreak}: SwitchMethodProps) => {
    const { settingsValuesPomodoro,  settingsValuesShort,  settingsValuesLong} = useContext(SettingsContext)  
  return (
    <nav className="flex flex-col sm:max-xl:flex-row xl:flex-row justify-around items-center gap-2 xl:gap text-white rounded-full w-4/5 xl:w-full h-1/6 sm:max-xl:h-timeOptions xl:h-timeOptions">
                {method === 'pomodoro' ? (
                  <button 
                  className="h-1/3 sm:max-xl:h-full xl:h-full w-full  font-mainfont text-base font-extrabold rounded-md text-black bg-white hover:bg-transparent hover:text-white border-2 border-white transition-all duration-500 hover:scale-105" 
                  onClick={e => setPomodoro(settingsValuesPomodoro)}>Pomodoro
                </button>
                ): (
                  <button 
                    className="h-1/3 sm:max-xl:h-full xl:h-full w-full font-mainfont text-base font-extrabold rounded-md hover:bg-white hover:text-black border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setPomodoro(settingsValuesPomodoro)}>Pomodoro
                  </button>
                )}
                {method === 'shortbreak' ? (
                  <button 
                    className="h-1/3 sm:max-xl:h-full xl:h-full w-full font-mainfont text-base font-extrabold rounded-md  text-black bg-white hover:bg-transparent hover:text-white border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setShortBreak(settingsValuesShort)}>Short Break
                  </button>
                ): (
                  <button 
                    className="h-1/3 sm:max-xl:h-full xl:h-full w-full font-mainfont text-base font-extrabold rounded-md hover:bg-white hover:text-black border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setShortBreak(settingsValuesShort)}>Short Break
                  </button>
                )}
                {method === 'longbreak' ? (
                  <button 
                    className="h-1/3 sm:max-xl:h-full xl:h-full w-full font-mainfont text-base font-extrabold rounded-md text-black bg-white hover:bg-transparent hover:text-white border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => {setLongBreak(settingsValuesLong)}}>Long Break
                  </button>
                ): (
                  <button 
                    className="h-1/3 sm:max-xl:h-full xl:h-full w-full font-mainfont text-base font-extrabold rounded-md hover:bg-white hover:text-black border-2 border-white transition-all duration-500 hover:scale-105" 
                    onClick={e => setLongBreak(settingsValuesLong)}>Long Break
                  </button>
                )}
            </nav>
  )
}

export default SwitchMethod