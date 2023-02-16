import { createContext, useState } from "react";

interface TimesContextProps {
    pomodoroTime: number,
    setPomodoroTime: (n: number) => void,
    shortBreakTime: number,
    setShortBreakTime: (n: number) => void,
    longBreakTime: number,
    setLongBreakTime: (n: number) => void
}

interface TimesContextProviderProps {
    children: React.ReactNode
}

export const TimesContext = createContext<TimesContextProps>({
    pomodoroTime: 1500,
    setPomodoroTime: () => {},
    shortBreakTime: 300,
    setShortBreakTime: () => {},
    longBreakTime: 600,
    setLongBreakTime: () => {}
})

export default function TimesContextProvider ({children}: TimesContextProviderProps){
  const [pomodoroTime, setPomodoroTime] = useState(1500) 
  const [shortBreakTime, setShortBreakTime] = useState(300) 
  const [longBreakTime, setLongBreakTime] = useState(600) 

  return (
    <TimesContext.Provider value={{
        pomodoroTime, 
        setPomodoroTime, 
        shortBreakTime, 
        setShortBreakTime, 
        longBreakTime, 
        setLongBreakTime
    }}>
        {children}
    </TimesContext.Provider>
  )
}