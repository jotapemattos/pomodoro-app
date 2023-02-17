import { useState } from 'react'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'
import './styles/index.css'

function App() {
  const [themeSelected, setThemeSelected] = useState('spring')

  function handleTheme (text: React.ChangeEvent<HTMLSelectElement>){
    setThemeSelected(text.target.value)
  }

  return (
    <div className="bg-no-repeat md:bg-no-repeat lg:bg-no-repeat xl:bg-no-repeat bg-cover md:bg-cover lg:bg-cover xl:bg-cover w-screen h-screen" 
      style={{backgroundImage: `url(/${themeSelected}.svg)`}}
    >
      <NavBar handleTheme={handleTheme} themeSelected={themeSelected}/>
      <div className='flex flex-col justify-center items-center h-main'>
        <MainContent/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
