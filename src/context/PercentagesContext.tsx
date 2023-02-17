import { createContext, useState } from "react";

interface PercentageContextProps {
    percentagePomodoro: number,
    setPercentagePomodoro: (n: number) => void,
    percentageShort: number,
    setPercentageShort: (n: number) => void,
    percentageLong: number,
    setPercentageLong: (n: number) => void
}

interface PercentageContextProviderProps {
    children: React.ReactNode
}

export const PercentageContext = createContext<PercentageContextProps>({
    percentagePomodoro: 100,
    setPercentagePomodoro: () => {},
    percentageShort: 100,
    setPercentageShort: () => {},
    percentageLong: 100,
    setPercentageLong: () => {}
})

export default function PercentageContextProvider ({children}: PercentageContextProviderProps){
  const [percentagePomodoro, setPercentagePomodoro] = useState(100) 
  const [percentageShort, setPercentageShort] = useState(100) 
  const [percentageLong, setPercentageLong] = useState(100) 

  return (
    <PercentageContext.Provider value={{
        percentagePomodoro, 
        setPercentagePomodoro, 
        percentageShort, 
        setPercentageShort, 
        percentageLong, 
        setPercentageLong
    }}>
        {children}
    </PercentageContext.Provider>
  )
}