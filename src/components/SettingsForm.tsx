import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsTimesContext';


const SettingsForm = () => {
  const { settingsValuesPomodoro, setSettingsValuesPomodoro, settingsValuesShort, setSettingsValuesShort, settingsValuesLong, setSettingsValuesLong} = useContext(SettingsContext)  
  return (
    
    <div className="w-full max-w-md flex flex-col gap-8 items-center justify-center">
        <h3 className="font-extrabold font-mainfont text-lg text-center">Change the time to your preference</h3>
        <div className="flex flex-col gap-8">
            <div className="flex">
                <div className="flex flex-col w-1/3 text-center items-center font-bold font-mainfont">
                    <label>Pomodoro Time</label>
                    <input type="text" value={settingsValuesPomodoro/60} onChange={event => setSettingsValuesPomodoro(Number(event.target.value)*60)} className="w-4/5 bg-transparent border-2 border-b-black outline-none" />
                </div>
                <div className="flex flex-col w-1/3 text-center items-center font-bold font-mainfont">
                    <label>Short Break</label>
                    <input type="text" value={settingsValuesShort/60} onChange={event => setSettingsValuesShort(Number(event.target.value)*60)} className="w-4/5 bg-transparent border-2 border-b-black outline-none" />
                </div>
                <div className="flex flex-col w-1/3 text-center items-center font-bold font-mainfont">
                    <label>Long Break</label>
                    <input type="text" value={settingsValuesLong/60} onChange={event => setSettingsValuesLong(Number(event.target.value)*60)} className="w-4/5 bg-transparent border-2 border-b-black outline-none" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsForm