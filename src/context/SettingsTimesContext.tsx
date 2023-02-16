import { createContext, useState } from "react";

interface SettingsContextProps {
    settingsValuesPomodoro: number,
    setSettingsValuesPomodoro: (n: number) => void,
    settingsValuesShort: number,
    setSettingsValuesShort: (n: number) => void,
    settingsValuesLong: number,
    setSettingsValuesLong: (n: number) => void
}

interface SettingsContextProviderProps {
    children: React.ReactNode
}

export const SettingsContext = createContext<SettingsContextProps>({
    settingsValuesPomodoro: 0,
    setSettingsValuesPomodoro: () => {},
    settingsValuesShort: 0,
    setSettingsValuesShort: () => {},
    settingsValuesLong: 0,
    setSettingsValuesLong: () => {}
})

export default function SettingsContextProvider ({children}: SettingsContextProviderProps){
  const [settingsValuesPomodoro, setSettingsValuesPomodoro] = useState(1500) 
  const [settingsValuesShort, setSettingsValuesShort] = useState(300) 
  const [settingsValuesLong, setSettingsValuesLong] = useState(600) 

  return (
    <SettingsContext.Provider value={{
        settingsValuesPomodoro, 
        setSettingsValuesPomodoro, 
        settingsValuesShort, 
        setSettingsValuesShort, 
        settingsValuesLong, 
        setSettingsValuesLong
    }}>
        {children}
    </SettingsContext.Provider>
  )
}