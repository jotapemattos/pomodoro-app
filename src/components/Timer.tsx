import useInterval from '../hooks/useInterval'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { convertTime } from '../utils/convertTime';
import { useEffect, useState, useContext } from 'react';
import { TimesContext } from '../context/TimesContext';
import { Pause, Play, Repeat } from 'phosphor-react';
import birdSound from '../sounds/birdSound.wav'
import { SettingsContext } from '../context/SettingsTimesContext';


interface TimerProps {
  setPomodoro: (n: number) => void
  setShortBreak: (n: number) => void
  setLongBreak: (n: number) => void
  start: boolean,
  setStart: (b: boolean) => void,
  method: string
  totalSeconds: number
}

const Timer = ({totalSeconds, setPomodoro, setShortBreak, setLongBreak, start, setStart, method }: TimerProps) => {
  const { pomodoroTime, shortBreakTime, longBreakTime, setPomodoroTime, setShortBreakTime, setLongBreakTime} = useContext(TimesContext)
  const { settingsValuesPomodoro, settingsValuesShort, settingsValuesLong} = useContext(SettingsContext)
  const [count, setCount] = useState(1)
  const [percentagePomodoro, setPercentagePomodoro] = useState(100)
  const [percentageShort, setPercentageShort] = useState(100)
  const [percentageLong, setPercentageLong] = useState(100)
  const audioWorkin = new Audio(birdSound)
    
  useEffect(()=>{                                       
    setPercentagePomodoro(Math.floor((pomodoroTime / totalSeconds) * 100))
  }, [pomodoroTime])

  useEffect(()=>{                                       
    setPercentageShort(Math.floor((shortBreakTime / totalSeconds) * 100))
    if (percentageShort === 0) audioWorkin.play()
  }, [shortBreakTime])

  useEffect(()=>{                                       
    setPercentageLong(Math.floor((longBreakTime / totalSeconds) * 100))
    if (percentageLong === 0) {audioWorkin.play()}
  }, [longBreakTime])
  
  useInterval(() => {
    if (start && pomodoroTime > 0) {
      setPomodoroTime(pomodoroTime - 1)
    } if (pomodoroTime === 0) {
      setPomodoroTime(settingsValuesPomodoro)
      setShortBreak(settingsValuesShort)
    }
  }, 1000)

  useInterval(() => {
    if (start && shortBreakTime > 0) {
      setShortBreakTime(shortBreakTime - 1)
    } if (shortBreakTime === 0) {
      setShortBreakTime(settingsValuesShort)
      setCount(count => count + 1)
      setPomodoro(settingsValuesPomodoro)
    }
  }, 1000)

  useInterval(() => {
    if (start && longBreakTime > 0) {
      setLongBreakTime(longBreakTime - 1)
    } if (longBreakTime === 0) { 
      setLongBreakTime(settingsValuesLong)
      setPomodoro(settingsValuesPomodoro)
    }
  }, 1000)

  
  function handleRestart() {
    switch (method) {
      case 'pomodoro': 
        setPercentagePomodoro(100)
        setStart(false)
        setPomodoroTime(settingsValuesPomodoro)
        break;
      case 'shortbreak':
        setPercentageShort(100)
        setStart(false)
        setShortBreakTime(settingsValuesShort)
        break;
      case 'longbreak': 
        setPercentageLong(100)
        setStart(false)
        setLongBreakTime(settingsValuesLong)
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-around gap-8">
      {method === 'pomodoro' && <CircularProgressbar strokeWidth={4} value={percentagePomodoro} text={`${convertTime(pomodoroTime)}`} />}
      {method === 'shortbreak' && <CircularProgressbar strokeWidth={4} value={percentageShort} text={`${convertTime(shortBreakTime)}`} />}
      {method === 'longbreak' && <CircularProgressbar strokeWidth={4} value={percentageLong} text={`${convertTime(longBreakTime)}`} />}
      <div className='flex gap-4'>
        {(start === false) && (<button
          className="bg-gradient-to-br from-white/10 to-white/20 backdrop-opacity-80 shadow-xl p-2 rounded-lg hover:bg-white/5 hover:scale-110 transition-all duration-300"
          onClick={() => setStart(true)}
        >
          <Play size={32} weight='fill' color="#ffffff" />
        </button>)}

        {start === true && (
          <button
            className="bg-gradient-to-br from-white/10 to-white/20 backdrop-opacity-80 shadow-xl p-2 rounded-lg hover:bg-white/5 hover:scale-110 transition-all duration-300"
            onClick={() => setStart(false)}
          >
            <Pause size={32} weight='fill' color="#ffffff" />
          </button>
        )}
        <button
          className="bg-gradient-to-br from-white/10 to-white/20 backdrop-opacity-80 shadow-xl p-2 rounded-lg hover:bg-white/5 hover:scale-110 transition-all duration-300"
          onClick={handleRestart}
        >
          <Repeat size={32} weight='fill' color="#ffffff" />
        </button>
      </div>
    </div>

  )
}

export default Timer